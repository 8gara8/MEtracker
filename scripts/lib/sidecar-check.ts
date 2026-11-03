import ts from 'typescript';

// The agent writes brief.data.ts, and the validator later imports it, which would run any code in it
// on the Mac. Before a draft sidecar is staged, this parses it (without running it) and accepts only
// the shape every sidecar has: a type import, one `const data: BriefData = { ...literals... }`, and
// `export default data`.

const LITERAL_KINDS = new Set([
  ts.SyntaxKind.StringLiteral,
  ts.SyntaxKind.NoSubstitutionTemplateLiteral,
  ts.SyntaxKind.NumericLiteral,
  ts.SyntaxKind.TrueKeyword,
  ts.SyntaxKind.FalseKeyword,
  ts.SyntaxKind.NullKeyword,
]);

function literalProblem(node: ts.Node, sf: ts.SourceFile): string | null {
  if (LITERAL_KINDS.has(node.kind)) return null;
  if (ts.isIdentifier(node) && node.text === 'undefined') return null;
  if (ts.isPrefixUnaryExpression(node) && node.operator === ts.SyntaxKind.MinusToken && ts.isNumericLiteral(node.operand)) return null;
  if (ts.isParenthesizedExpression(node)) return literalProblem(node.expression, sf);
  if (ts.isArrayLiteralExpression(node)) {
    for (const el of node.elements) {
      const p = literalProblem(el, sf);
      if (p) return p;
    }
    return null;
  }
  if (ts.isObjectLiteralExpression(node)) {
    for (const prop of node.properties) {
      if (!ts.isPropertyAssignment(prop)) return `line ${line(prop, sf)}: only plain "key: value" properties are allowed`;
      if (!ts.isIdentifier(prop.name) && !ts.isStringLiteral(prop.name) && !ts.isNumericLiteral(prop.name)) {
        return `line ${line(prop, sf)}: computed property names are not allowed`;
      }
      const p = literalProblem(prop.initializer, sf);
      if (p) return p;
    }
    return null;
  }
  return `line ${line(node, sf)}: ${ts.SyntaxKind[node.kind]} is not allowed; use plain strings, numbers, booleans, null, arrays and objects`;
}

const line = (n: ts.Node, sf: ts.SourceFile) => sf.getLineAndCharacterOfPosition(n.getStart(sf)).line + 1;

/** Problems that make a sidecar unsafe to import; empty when it is pure data. */
export function sidecarProblems(source: string): string[] {
  const sf = ts.createSourceFile('brief.data.ts', source, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TS);
  const problems: string[] = [];
  let sawData = false;
  let sawExport = false;
  for (const st of sf.statements) {
    if (
      ts.isImportDeclaration(st) &&
      st.importClause?.isTypeOnly &&
      ts.isStringLiteral(st.moduleSpecifier) &&
      st.moduleSpecifier.text === '@/lib/brief-data'
    ) continue;
    if (ts.isVariableStatement(st) && !sawData) {
      const decls = st.declarationList.declarations;
      const d = decls[0];
      const isConst = (st.declarationList.flags & ts.NodeFlags.Const) !== 0;
      if (decls.length === 1 && isConst && !st.modifiers?.length && ts.isIdentifier(d.name) && d.name.text === 'data' && d.initializer) {
        if (!ts.isObjectLiteralExpression(d.initializer)) problems.push('`data` must be an object literal.');
        else {
          const p = literalProblem(d.initializer, sf);
          if (p) problems.push(p);
        }
        sawData = true;
        continue;
      }
    }
    if (ts.isExportAssignment(st) && !st.isExportEquals && ts.isIdentifier(st.expression) && st.expression.text === 'data') {
      sawExport = true;
      continue;
    }
    problems.push(`line ${line(st, sf)}: unexpected statement; a sidecar is \`import type { BriefData }\`, \`const data: BriefData = {...}\` and \`export default data\` only`);
  }
  if (!sawData) problems.push('Missing `const data: BriefData = { ... }`.');
  if (!sawExport) problems.push('Missing `export default data;`.');
  return problems;
}

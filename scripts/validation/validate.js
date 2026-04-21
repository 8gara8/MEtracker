// scripts/validation/validate.js
// Validates new brief files in a PR. Exits 0 on success, non-zero on any failure.

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const matter = require('gray-matter');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const REPO_ROOT = path.join(__dirname, '..', '..');
const SCHEMA = JSON.parse(
  fs.readFileSync(path.join(REPO_ROOT, 'briefs', 'schema.json'), 'utf-8')
);

const errors = [];
const warn = (m) => errors.push(m);

const changed = execSync('git diff --name-only origin/main HEAD', { encoding: 'utf-8' })
  .trim().split('\n').filter(Boolean);

const mdFiles   = changed.filter(f => /^briefs\/\d{4}-\d{2}-\d{2}\.md$/.test(f));
const jsonFiles = new Set(changed.filter(f => /^briefs\/\d{4}-\d{2}-\d{2}\.json$/.test(f)));

for (const md of mdFiles) {
  const expectedJson = md.replace(/\.md$/, '.json');
  if (!jsonFiles.has(expectedJson)) {
    warn(`${md}: missing matching ${expectedJson}`);
  }
}

(async () => {
  for (const md of mdFiles) await validateBrief(md);

  if (errors.length > 0) {
    console.error('Validation failed:\n');
    errors.forEach(e => console.error('  ✗ ' + e));
    process.exit(1);
  }
  console.log('All validation checks passed.');
})();

async function validateBrief(relPath) {
  const mdPath   = path.join(REPO_ROOT, relPath);
  const jsonPath = mdPath.replace(/\.md$/, '.json');
  const parsed   = matter(fs.readFileSync(mdPath, 'utf-8'));
  const fm       = parsed.data;
  const body     = parsed.content;

  checkDateConsistency(relPath, fm);
  checkSourcesCount(relPath, fm);
  checkSourceCategories(relPath, jsonPath);
  checkLengths(relPath, body);
  checkJsonSchema(jsonPath);
  await checkUrlsResolve(relPath, body);
}

function checkDateConsistency(relPath, fm) {
  const filenameDate = path.basename(relPath, '.md');
  if (fm.date !== filenameDate) {
    warn(`${relPath}: frontmatter date "${fm.date}" != filename "${filenameDate}"`);
  }
}

function checkSourcesCount(relPath, fm) {
  if (!fm.quiet_day && (fm.sources_count || 0) < 8) {
    warn(`${relPath}: sources_count=${fm.sources_count}, must be >= 8 (or set quiet_day: true)`);
  }
}

const ALLOWED_CATEGORIES = new Set([
  'western_mainstream_press',
  'international_regional_press',
  'iranian_state_media',
  'iranian_officials_direct',
  'israeli_military_government',
  'arab_regional_governments',
  'russia_china_adversary',
  'human_rights_monitoring',
  'us_government_agencies',
  'european_international_bodies',
  'think_tanks_analysts',
  'market_maritime_data'
]);

function checkSourceCategories(relPath, jsonPath) {
  if (!fs.existsSync(jsonPath)) return;
  const meta = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  const mdFm = matter(fs.readFileSync(path.join(REPO_ROOT, relPath), 'utf-8')).data;
  if (mdFm.quiet_day) return;

  const cats = meta.source_categories || [];
  const unknown = cats.filter(c => !ALLOWED_CATEGORIES.has(c));
  if (unknown.length > 0) {
    warn(`${relPath}: unknown source_categories values: ${unknown.join(', ')}`);
  }
  const distinct = new Set(cats).size;
  if (distinct < 6) {
    warn(`${relPath}: only ${distinct} distinct source categories used, must have >= 6 (single-category dominance is a failure mode — see §3.1)`);
  }
}

function checkLengths(relPath, body) {
  const sections = parseSections(body);
  const sectionChecks = [
    ['Executive Summary', 150, 400],
    ['Analytical Judgment', 400, 600]
  ];
  for (const [name, min, max] of sectionChecks) {
    const words = wordCount(sections[name] || '');
    if (words < min || words > max) {
      warn(`${relPath}: "${name}" is ${words} words, must be ${min}-${max}`);
    }
  }
  const total = wordCount(body);
  if (total < 1500 || total > 4000) {
    warn(`${relPath}: total length ${total} words, must be 1500-4000`);
  }
}

function checkJsonSchema(jsonPath) {
  if (!fs.existsSync(jsonPath)) return;
  const meta = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  const ajv = new Ajv({ allErrors: true });
  addFormats(ajv);
  const valid = ajv.validate(SCHEMA, meta);
  if (!valid) {
    for (const err of ajv.errors) {
      warn(`${path.relative(REPO_ROOT, jsonPath)}: schema violation at ${err.instancePath} — ${err.message}`);
    }
  }
}

async function checkUrlsResolve(relPath, body) {
  const urls = extractUrls(body);
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(5000) });
      if (res.ok) continue;
      const wb = await fetch(
        `https://archive.org/wayback/available?url=${encodeURIComponent(url)}`
      );
      const data = await wb.json();
      if (!data.archived_snapshots?.closest) {
        warn(`${relPath}: unresolved URL (${res.status}) and no Wayback snapshot: ${url}`);
      }
    } catch (e) {
      warn(`${relPath}: URL fetch failed: ${url} (${e.message})`);
    }
  }
}

function parseSections(md) {
  const sections = {};
  let current = null;
  for (const line of md.split('\n')) {
    const h1 = line.match(/^#\s+(.+)$/);
    if (h1) { current = h1[1].trim(); sections[current] = ''; }
    else if (current) { sections[current] += line + '\n'; }
  }
  return sections;
}

function wordCount(s) { return s.trim().split(/\s+/).filter(Boolean).length; }

function extractUrls(md) {
  return [...new Set(md.match(/https?:\/\/[^\s\)\]]+/g) || [])];
}

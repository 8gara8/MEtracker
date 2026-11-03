// Reads the agent's stream-json transcript. Event shapes as checked for EuropeTracker against Claude
// Code 2.1.316: {type:"system",subtype:"init"} carries session_id and model; tool calls are tool_use
// blocks in assistant messages; tool output is tool_result blocks in user messages; the final
// {type:"result"} event's is_error says whether the run failed.

export interface Transcript {
  sessionId: string | null;
  model: string | null;
  /** URLs the agent opened with WebFetch. */
  fetched: string[];
  /** Every URL that appeared in a tool result: search results and fetched pages. */
  resultUrls: string[];
  searches: number;
  isError: boolean | null;
  numTurns: number | null;
  costUsd: number | null;
  authFailed: boolean;
}

type Block = { type?: string; name?: string; input?: Record<string, unknown>; content?: unknown };

const URL_RE = /https?:\/\/[^\s"'<>()\]\\]+/g;

export function extractUrls(text: string): string[] {
  return (text.match(URL_RE) ?? []).map((u) => u.replace(/[.,;:!?]+$/, ''));
}

/** For matching cited URLs against what the agent saw: no scheme, www, fragment, query or trailing slash. */
export function urlKey(url: string): string {
  return url
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/^www\./i, '')
    .replace(/[?#].*$/, '')
    .replace(/\/+$/, '')
    .toLowerCase();
}

export function parseTranscript(jsonl: string): Transcript {
  const t: Transcript = {
    sessionId: null, model: null, fetched: [], resultUrls: [], searches: 0,
    isError: null, numTurns: null, costUsd: null, authFailed: false,
  };
  for (const line of jsonl.split('\n')) {
    if (!line.trim().startsWith('{')) continue;
    let e: Record<string, unknown>;
    try {
      e = JSON.parse(line);
    } catch {
      continue;
    }
    if (e.type === 'system' && e.subtype === 'init') {
      t.sessionId ??= (e.session_id as string) ?? null;
      t.model ??= (e.model as string) ?? null;
    }
    if (e.error === 'authentication_failed') t.authFailed = true;
    const content = (e.message as { content?: unknown } | undefined)?.content;
    if (Array.isArray(content)) {
      for (const block of content as Block[]) {
        if (block.type === 'tool_use' && block.name === 'WebFetch' && typeof block.input?.url === 'string') {
          t.fetched.push(block.input.url);
        }
        if (block.type === 'tool_use' && block.name === 'WebSearch') t.searches++;
        if (block.type === 'tool_result') {
          const text = typeof block.content === 'string' ? block.content : JSON.stringify(block.content ?? '');
          t.resultUrls.push(...extractUrls(text));
        }
      }
    }
    if (e.type === 'result') {
      t.sessionId ??= (e.session_id as string) ?? null;
      t.isError = e.is_error === true;
      t.numTurns = typeof e.num_turns === 'number' ? e.num_turns : null;
      t.costUsd = typeof e.total_cost_usd === 'number' ? e.total_cost_usd : null;
    }
  }
  return t;
}

/** Keys of every URL the agent fetched or saw in a tool result during this run. */
export function evidence(transcripts: Transcript[]): Set<string> {
  return new Set(transcripts.flatMap((t) => [...t.fetched, ...t.resultUrls]).map(urlKey));
}

import { aggregateAll } from '../lib/data-aggregation';

const result = aggregateAll();
console.log(
  `[build-data] aggregated ${result.briefs} brief(s) -> ${result.outputs.join(', ')}`,
);

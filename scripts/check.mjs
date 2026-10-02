import { readFile } from 'node:fs/promises';

const smoke = await readFile(new URL('../SMOKE.md', import.meta.url), 'utf8');

if (!smoke.includes('# Development OS pilot\n')) {
  throw new Error('SMOKE.md must keep the pilot heading');
}
if (!smoke.includes('Pilot status:')) {
  throw new Error('SMOKE.md must contain the pilot status');
}

import { createInterface } from 'node:readline';
import worker from './worker.mjs';

for await (const line of createInterface({ input: process.stdin, crlfDelay: Infinity })) {
  // The pipe belongs to the local Claude process, so no Sites session is needed.
  const request = new Request('http://localhost/mcp', {
    method: 'POST',
    headers: { 'oai-authenticated-user-id': 'local-stdio' },
    body: line,
  });
  const response = await worker.fetch(request, process.env);
  const body = await response.text();
  if (body) process.stdout.write(body + '\n');
}

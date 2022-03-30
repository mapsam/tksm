import type { NextApiRequest } from 'next';

export function validateRequestBody(body: any) : string[] {
  const errors: Array<string> = [];
  if (!body) return ['No request body provided'];
  if (!body.firstname) errors.push('Missing firstname.');
  if (!body.lastname) errors.push('Missing lastname.');
  if (!('attending' in body)) errors.push('Missing attendance choice.');
  if (!body.email) errors.push('Missing email address.');
  return errors;
}

export function log(request: NextApiRequest) : void {
  console.log(`${request.method} ${request.url} ${JSON.stringify(request.body)}`);
}
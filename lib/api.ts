import type { NextApiRequest } from 'next';
import type { APIErrors } from './types';
import v from '@mapbox/fusspot';

export function validateRequestBody2(body: any) : APIErrors[] {
  const validator = v.assert(
    v.strictShape({
      firstname: v.required(v.string),
      lastname: v.required(v.string),
      attending: v.required(v.boolean),
      email: v.required(v.string)
    })
  );

  try {
    validator(body);
  } catch (err) {
    return [err.message];
  }
}

export function log(request: NextApiRequest) : void {
  console.log(`${request.method} ${request.url} ${JSON.stringify(request.body)}`);
}
import type { NextApiRequest } from 'next';
import type { APIErrors } from './types';
import v from '@mapbox/fusspot';

export function validateRequestBody(body: any) : APIErrors[] {
  const errors = [];
  const validatePerson = v.assert(
    v.strictShape({
      firstname: v.required(v.string),
      lastname: v.required(v.string),
      attending: v.required(v.boolean),
      email: v.required(v.string)
    })
  );

  body.forEach((person) => {
    try {
      validatePerson(person);
    } catch (err) {
      errors.push(err.message);
    }
  });

  if (errors.length) return errors;
  return [];
}

export function log(request: NextApiRequest) : void {
  console.log(`${request.method} ${request.url} ${JSON.stringify(request.body)}`);
}
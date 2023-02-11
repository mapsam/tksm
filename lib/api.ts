import type { NextApiRequest } from 'next';
import type { APIPostBody } from './types';
import type { ValidationResult } from 'joi';

import Joi from 'joi';

const schema = Joi.array().items({
  firstname: Joi.string().trim().required(),
  lastname: Joi.string().trim().required(),
  attending: Joi.boolean().required(),
  email: Joi.string().email().trim().required(),
  diet: Joi.string()
});

export function validateRequestBody(body: APIPostBody) : ValidationResult {
  return schema.validate(body, { abortEarly: false });
}

export function log(request: NextApiRequest) : void {
  console.log(`${request.method} ${request.url} ${JSON.stringify(request.body)}`);
}
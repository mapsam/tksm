import type { NextApiRequest } from 'next';
import type { APIPostBody } from './types';
import type { ValidationResult } from 'joi';

import Joi from 'joi';

const schema = Joi.array().items({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  attending: Joi.boolean().required(),
  email: Joi.string().email().required()
});

export function validateRequestBody(body: APIPostBody) : ValidationResult {
  return schema.validate(body, { abortEarly: false });
}

export function log(request: NextApiRequest) : void {
  console.log(`${request.method} ${request.url} ${JSON.stringify(request.body)}`);
}
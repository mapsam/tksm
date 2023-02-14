import type { NextApiRequest } from 'next';
import type { APIPostBody } from './types';
import type { ValidationResult } from 'joi';

import Joi from 'joi';

const schema = Joi.array().items({
  firstname: Joi.string().trim().min(1).max(50).required(),
  lastname: Joi.string().trim().min(1).max(50).required(),
  attending: Joi.boolean().required(),
  email: Joi.string().email().trim().max(100).allow(null),
  diet: Joi.string().allow(null).max(200)
});

export function validateRequestBody(body: APIPostBody) : ValidationResult {
  return schema.validate(body, { abortEarly: false });
}

export function log(request: NextApiRequest, id: string) : void {
  console.log(`[${id}] ${request.method} ${request.url} ${JSON.stringify(request.body)}`);
}
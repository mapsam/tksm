import type { NextApiRequest } from 'next';
import type { APIPostBody } from './types';
import type { ValidationResult } from 'joi';

import Joi from 'joi';

const schema = Joi.object({
  people: Joi.array().items({
    firstname: Joi.string().trim().min(1).max(50).required(),
    lastname: Joi.string().trim().min(1).max(50).required(),
    attendingFriday: Joi.string().valid('yes', 'no', 'maybe').required(),
    attendingSaturday: Joi.string().valid('yes', 'no', 'maybe').required(),
    attendingSunday: Joi.string().valid('yes', 'no', 'maybe').required(),
  }),
  phone: Joi.string().trim().max(12).required(),
  email: Joi.string().email().trim().max(100).required(),
  restrictions: Joi.string().allow(null, '').max(200),
  accommodations: Joi.string().allow(null, '').max(200),
  words: Joi.string().allow(null, '').max(1000),
});

export function validateRequestBody(body: APIPostBody) : ValidationResult {
  return schema.validate(body, { abortEarly: false });
}

export function log(request: NextApiRequest, id: string) : void {
  console.log(`[${id}] ${request.method} ${request.url} ${JSON.stringify(request.body)}`);
}
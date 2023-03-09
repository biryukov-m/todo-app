// eslint-disable-next-line import/no-extraneous-dependencies
import { ParamsDictionary } from 'express-serve-static-core';
import { Request } from 'express';

// TODO: add generic request query
export interface IRequest<T, P extends ParamsDictionary> extends Request {
  body: T;
  params: P;
}

// eslint-disable-next-line import/no-extraneous-dependencies
import { ParamsDictionary } from 'express-serve-static-core';
import { Document } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  description: string;
  isPublic: boolean;
  isCompleted: boolean;
}

export interface ITodoUpdate {
  title?: string;
  description?: string;
  isPublic?: boolean;
  isCompleted?: boolean;
}

export interface ITodoUpdateReqBody extends ITodoUpdate {
  id: string;
}

export interface IOneTodoReqParams extends ParamsDictionary {
  id: string;
}

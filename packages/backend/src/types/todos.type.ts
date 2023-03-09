// eslint-disable-next-line import/no-extraneous-dependencies
import { ParamsDictionary } from 'express-serve-static-core';
import { Document } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  description: string;
  isPublic: boolean;
  isCompleted: boolean;
}

export interface ITodoUpdate extends Document {
  _id: string;
  title?: string;
  description?: string;
  isPublic?: boolean;
  isCompleted?: boolean;
}

export interface IOneTodoReqParams extends ParamsDictionary {
  id: string;
}

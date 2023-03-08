import { Document } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  description: string;
  isPublic: boolean;
  isCompleted: boolean;
}

export interface ITodoUpdate extends ITodo {
  id: string;
}

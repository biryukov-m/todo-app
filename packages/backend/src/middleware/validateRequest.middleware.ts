import { Request, Response, NextFunction } from 'express';
import { AnyObjectSchema } from 'yup';

export const validateRequest =
  (schema: AnyObjectSchema, validate: 'body' | 'params' | 'query' = 'body') =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data;
      switch (validate) {
        case 'body':
          data = req.body;
          break;
        case 'params':
          data = req.params;
          break;
        case 'query':
          data = req.query;
          break;
      }
      await schema.validate({ ...data });
      next();
    } catch (err) {
      next(err);
    }
  };

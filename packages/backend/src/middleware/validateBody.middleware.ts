import { Request, Response, NextFunction } from 'express';
import { AnyObjectSchema } from 'yup';

export const validateBody =
  (schema: AnyObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({ ...req.body });
      next();
    } catch (err) {
      next(err);
    }
  };

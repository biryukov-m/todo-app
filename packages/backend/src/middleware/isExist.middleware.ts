import { Request, Response, NextFunction } from 'express';
import { Model } from 'mongoose';

export const isExist =
  <T>(model: Model<T>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id || req.body.id;
      const foundInDb = await model.findById(id);
      if (!foundInDb) {
        const { modelName } = model;
        throw new Error(`Model ${modelName} with ${id} doesn't exist in db`);
      }
      next();
    } catch (error) {
      if (error instanceof Error) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error });
      }
    }
  };

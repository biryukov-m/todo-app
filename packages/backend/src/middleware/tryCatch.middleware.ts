import { Request, Response } from 'express';

export const tryCatch = (controller: any) => async (req: Request, res: Response) => {
  try {
    const result = await controller(req);
    res.status(200).send({ result });
  } catch (error) {
    res.status(500).send({ error });
  }
};

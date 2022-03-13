import { Request, Response } from 'express';

const pageNotFoundHandler = (req: Request, res: Response) => {
  res.status(404).send({ statusCode: 404, message: 'Not found' });
};

export default pageNotFoundHandler;

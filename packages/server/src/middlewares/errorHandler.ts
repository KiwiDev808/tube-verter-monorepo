import { NextFunction, Request, Response } from 'express';

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  console.error(err.stack);
  res.status(500).send({ statusCode: 500, message: err?.message });
};

export default errorHandler;

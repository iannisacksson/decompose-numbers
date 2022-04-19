import { Request, Response, NextFunction } from 'express';

export const contentType = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  response.type('json');

  next();
};

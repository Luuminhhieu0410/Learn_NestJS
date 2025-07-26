import { Request, Response, NextFunction } from 'express';

export function ExpressMidlleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(`Express Middleware...`);
  next();
}

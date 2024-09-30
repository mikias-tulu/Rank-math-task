import { Request, Response, NextFunction } from 'express';

// Custom error handling middleware
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);

  res.status(500).render('index', {
    movie: null,
    error: 'An error occurred. Please try again later.'
  });
};

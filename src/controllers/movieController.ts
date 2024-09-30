import { Request, Response, NextFunction } from 'express';
import { fetchMovieDetails } from '../services/omdbService';

export const getMovieDetails = async (req: Request, res: Response, next: NextFunction) => {
  const movieName = req.body.movieName;

  try {
    const movie = await fetchMovieDetails(movieName);

    if (!movie) {
      res.render('index', { movie: null, error: 'Movie not found!' });
    } else {
      res.render('index', { movie, error: null });
    }
  } catch (error) {
    next(error);
  }
};

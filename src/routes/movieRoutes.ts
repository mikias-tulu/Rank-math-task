import { Router } from 'express';
import { getMovieDetails } from '../controllers/movieController';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { movie: null, error: null });
});

router.post('/search', getMovieDetails);

export default router;

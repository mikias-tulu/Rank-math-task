import express from 'express';
import path from 'path';
import movieRoutes from './routes/movieRoutes';
import { errorHandler } from './utils/errorHandler';

const app = express();

// Set up the view engine and public folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', movieRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;

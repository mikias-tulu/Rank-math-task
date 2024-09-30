import axios from 'axios';
import { config } from '../config/config';

interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string, Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export const fetchMovieDetails = async (movieName: string): Promise<Movie | null> => {
  const url = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${config.omdbApiKey}`;

  try {
    const response = await axios.get<Movie>(url);
    const movie = response.data;

    if (movie.Response === 'False') {
      return null;
    }

    return movie;
  } catch (error) {
    throw new Error('Error fetching movie details');
  }
};

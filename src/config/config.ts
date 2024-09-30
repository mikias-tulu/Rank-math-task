import dotenv from 'dotenv';

dotenv.config();

export const config = {
  omdbApiKey: process.env.OMDB_API_KEY || '',
  port: process.env.PORT || 3000
};

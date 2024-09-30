import app from './app';
import { config } from './config/config';

// Start the server
const port = config.port;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

import express from 'express';
import api from './routes';
import logger from './middleware/logger';

const app = express();
const port = 3000;

app.use('/api', [logger, api]);

app.get('/', (req, res) => {
  res.send('server connected');
});

app.listen(port, () => console.log(`Listening at port ${port}`));

export default app;

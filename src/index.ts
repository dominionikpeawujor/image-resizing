import express from 'express';
import api from './routes';
import logger from './middleware/logger';

const app = express();
const port = 3000;

app.use('/api', [logger, api]);

app.get('/', (_req: express.Request, res: express.Response): void => {
  res.send('server connected');
});

app.listen(port, (): void => console.log(`Listening at port ${port}`));

export default app;

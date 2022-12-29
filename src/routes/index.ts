import express from 'express';
import resize from './api/resize';

const routes = express.Router();
routes.use('/resize', resize);

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('routes connected');
});

export default routes;

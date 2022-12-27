import express from 'express';
import resize from './api/resize';

const routes = express.Router();
routes.use('/resize', resize);

routes.get('/', (req, res) => {
  res.send('routes connected');
});

export default routes;

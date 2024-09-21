import express from 'express';
import cors from 'cors';
import { notFoundMiddleware } from './middlewares/notFoundMiddleware.js';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';
import routers from './routers/index.js';

export const startServer = () => {
  const app = express();

  app.use(cors());

  app.use(express.json());

  app.use(routers);

  app.use(notFoundMiddleware);

  app.use(errorHandlerMiddleware);

  app.listen(3000, () => {
    console.log('Server running on port 3000!');
  });
};

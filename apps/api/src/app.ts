import express from 'express';
import { healthRouter } from './routes/health.routes';
import { goalsRouter } from './routes/goals.routes';

export function createApp() {
  const app = express();

  app.use(express.json());

  app.use('/health', healthRouter);
  app.use('/goals', goalsRouter);

  return app;
}

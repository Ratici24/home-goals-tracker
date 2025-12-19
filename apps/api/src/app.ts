import express from 'express';
import { healthRouter } from './routes/health.routes';
import { goalsRouter } from './routes/goals.routes';
import { stepsRouter } from './routes/steps.routes';
import { errorMiddleware } from './middlewares/error.middleware';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';

export function createApp() {
  const app = express();

  app.use(express.json());

  app.use('/health', healthRouter);
  app.use('/goals', goalsRouter);
  app.use('/steps', stepsRouter);

  app.use(errorMiddleware);
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  return app;
}

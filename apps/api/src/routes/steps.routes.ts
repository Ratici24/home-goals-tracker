import { Router } from 'express';

export const stepsRouter = Router();

stepsRouter.get('/', (_req, res) => {
  res.json([]);
});

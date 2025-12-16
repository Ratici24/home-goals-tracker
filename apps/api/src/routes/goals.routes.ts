import { Router } from 'express';

export const goalsRouter = Router();

goalsRouter.get('/', (_req, res) => {
  res.json([]);
});

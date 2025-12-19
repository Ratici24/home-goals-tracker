import { Router } from 'express';
import { toggleStep } from '../services/steps.service';

export const stepsRouter = Router();

stepsRouter.patch('/:id', async (req, res) => {
  const result = await toggleStep(req.params.id, req.body ?? {});
  if (!result.ok) return res.status(result.status).json({ error: result.error });
  res.status(result.status).json(result.data);
});

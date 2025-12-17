import { Router } from 'express';
import { createStep, toggleStep } from '../services/steps.service';

export const stepsRouter = Router();

stepsRouter.post('/:goalId', (req, res) => {
  const step = createStep(req.params.goalId, req.body.title);
  res.status(201).json(step);
});

stepsRouter.patch('/:id', (req, res) => {
  const step = toggleStep(req.params.id, req.body.done);
  if (!step) return res.sendStatus(404);
  res.json(step);
});

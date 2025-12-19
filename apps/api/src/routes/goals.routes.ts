import { Router } from 'express';
import {
  changeGoalStatus,
  createGoal,
  getGoal,
  getGoalProgress,
  listGoals,
} from '../services/goals.service';
import { createGoalSchema } from '../validators/goal.schema';
import { addStep } from '../services/steps.service';

export const goalsRouter = Router();

goalsRouter.get('/', async (req, res) => {
  const result = await listGoals(req.query);
  res.status(result.status).json(result.data);
});

goalsRouter.post('/', async (req, res) => {
  const result = await createGoal(req.body ?? {});
  if (!result.ok) return res.status(result.status).json({ error: result.error });
  res.status(result.status).json(result.data);
});

goalsRouter.get('/:id', async (req, res) => {
  const result = await getGoal(req.params.id);
  if (!result.ok) return res.status(result.status).json({ error: result.error });
  res.status(result.status).json(result.data);
});

goalsRouter.patch('/:id/status', async (req, res) => {
  const result = await changeGoalStatus(req.params.id, req.body?.status);
  if (!result.ok) return res.status(result.status).json({ error: result.error });
  res.status(result.status).json(result.data);
});

goalsRouter.get('/:id/progress', async (req, res) => {
  const result = await getGoalProgress(req.params.id);
  if (!result.ok) return res.status(result.status).json({ error: result.error });
  res.status(result.status).json(result.data);
});

goalsRouter.post('/:id/steps', async (req, res) => {
  const result = await addStep(req.params.id, req.body ?? {});
  if (!result.ok) return res.status(result.status).json({ error: result.error });
  res.status(result.status).json(result.data);
});

goalsRouter.post('/', (req, res) => {
  const parsed = createGoalSchema.parse(req.body); // ← ВАЛІДАЦІЯ

  const goal = createGoal(parsed);
  res.status(201).json(goal);
});

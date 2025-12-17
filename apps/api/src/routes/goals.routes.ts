import { Router } from 'express';
import { createGoal, listGoals } from '../services/goals.service';

export const goalsRouter = Router();

goalsRouter.post('/', (req, res) => {
  const { title, description, priority } = req.body ?? {};

  if (typeof title !== 'string' || title.trim().length === 0) {
    return res.status(400).json({ error: 'title is required' });
  }

  const goal = createGoal({
    title: title.trim(),
    description,
    priority,
  });

  return res.status(201).json(goal);
});

goalsRouter.get('/', (_req, res) => {
  return res.json(listGoals());
});

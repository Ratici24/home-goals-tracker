import { goalsRepository } from '../repositories/goals.repository';

export async function addStep(goalId: string, input: { title?: unknown }) {
  const title = typeof input.title === 'string' ? input.title.trim() : '';
  if (!title) return { ok: false as const, status: 400 as const, error: 'title is required' };

  const goal = await goalsRepository.getGoalById(goalId);
  if (!goal) return { ok: false as const, status: 404 as const, error: 'goal not found' };

  const step = await goalsRepository.addStep(goalId, title);
  return { ok: true as const, status: 201 as const, data: step };
}

export async function toggleStep(stepId: string, input: { done?: unknown }) {
  const done = typeof input.done === 'boolean' ? input.done : null;
  if (done === null)
    return { ok: false as const, status: 400 as const, error: 'done must be boolean' };

  try {
    const step = await goalsRepository.toggleStep(stepId, done);
    return { ok: true as const, status: 200 as const, data: step };
  } catch {
    return { ok: false as const, status: 404 as const, error: 'step not found' };
  }
}

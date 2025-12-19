import { goalsRepository } from '../repositories/goals.repository';

export function parseGoalStatus(raw: unknown): string | null {
  if (raw === 'ACTIVE') return 'ACTIVE';
  if (raw === 'COMPLETED') return 'COMPLETED';
  if (raw === 'ARCHIVED') return 'ARCHIVED';
  return null;
}

export async function createGoal(input: {
  title?: unknown;
  description?: unknown;
  priority?: unknown;
}) {
  const title = typeof input.title === 'string' ? input.title.trim() : '';
  if (!title) {
    return { ok: false as const, status: 400 as const, error: 'title is required' };
  }

  const description = typeof input.description === 'string' ? input.description.trim() : undefined;
  const priority =
    typeof input.priority === 'number'
      ? input.priority
      : typeof input.priority === 'string' && input.priority.trim() !== ''
        ? Number(input.priority)
        : undefined;

  const goal = await goalsRepository.createGoal({
    title,
    description,
    priority: Number.isFinite(priority as number) ? (priority as number) : undefined,
  });

  return { ok: true as const, status: 201 as const, data: goal };
}

export async function listGoals(query: { status?: unknown; priority?: unknown }) {
  const status = parseGoalStatus(query.status);

  const priority =
    typeof query.priority === 'string' && query.priority.trim() !== ''
      ? Number(query.priority)
      : undefined;

  const goals = await goalsRepository.listGoals({
    status: status ?? undefined,
    priority: Number.isFinite(priority as number) ? (priority as number) : undefined,
  });

  return { ok: true as const, status: 200 as const, data: goals };
}

export async function getGoal(id: string) {
  const goal = await goalsRepository.getGoalById(id);
  if (!goal) return { ok: false as const, status: 404 as const, error: 'goal not found' };
  return { ok: true as const, status: 200 as const, data: goal };
}

export async function changeGoalStatus(id: string, rawStatus: unknown) {
  const status = parseGoalStatus(rawStatus);
  if (!status) return { ok: false as const, status: 400 as const, error: 'invalid status' };

  try {
    const goal = await goalsRepository.updateGoalStatus(id, status);
    return { ok: true as const, status: 200 as const, data: goal };
  } catch {
    return { ok: false as const, status: 404 as const, error: 'goal not found' };
  }
}

export async function getGoalProgress(id: string) {
  const goal = await goalsRepository.getGoalById(id);
  if (!goal) return { ok: false as const, status: 404 as const, error: 'goal not found' };

  const total = goal.steps.length;
  const done = goal.steps.filter((s) => s.done).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return {
    ok: true as const,
    status: 200 as const,
    data: { goalId: id, totalSteps: total, doneSteps: done, percent },
  };
}

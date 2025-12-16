import { v4 as uuid } from 'uuid';
import { Goal } from '../models/goal';
import { memoryRepository } from '../repositories/memory.repository';

export function createGoal(input: {
  title: string;
  description?: string;
  priority?: number;
}): Goal {
  const goal: Goal = {
    id: uuid(),
    title: input.title,
    description: input.description,
    priority: input.priority ?? 3,
    status: 'active',
    createdAt: new Date(),
  };

  return memoryRepository.addGoal(goal);
}

export function listGoals(): Goal[] {
  return memoryRepository.getGoals();
}

export function listGoalsWithProgress() {
  return memoryRepository.getGoals().map((goal) => {
    const steps = memoryRepository.getStepsByGoal(goal.id);
    const done = steps.filter((s) => s.done).length;

    return {
      ...goal,
      progress: {
        done,
        total: steps.length,
        ratio: steps.length ? done / steps.length : 0,
      },
    };
  });
}

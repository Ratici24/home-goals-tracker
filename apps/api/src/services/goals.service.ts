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

import { v4 as uuid } from 'uuid';
import { memoryRepository } from '../repositories/memory.repository';
import { Step } from '../models/step';

export function createStep(goalId: string, title: string): Step {
  return memoryRepository.addStep({
    id: uuid(),
    goalId,
    title,
    done: false,
    createdAt: new Date(),
  });
}

export function toggleStep(id: string, done: boolean) {
  return memoryRepository.updateStep(id, done);
}

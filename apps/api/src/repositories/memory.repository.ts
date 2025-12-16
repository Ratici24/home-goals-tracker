import { Goal } from '../models/goal';
import { Step } from '../models/step';

const goals: Goal[] = [];
const steps: Step[] = [];

export const memoryRepository = {
  addGoal(goal: Goal) {
    goals.push(goal);
    return goal;
  },

  getGoals() {
    return goals;
  },

  addStep(step: Step) {
    steps.push(step);
    return step;
  },

  getStepsByGoal(goalId: string) {
    return steps.filter((s) => s.goalId === goalId);
  },

  updateStep(id: string, done: boolean) {
    const step = steps.find((s) => s.id === id);
    if (!step) return null;
    step.done = done;
    return step;
  },
};

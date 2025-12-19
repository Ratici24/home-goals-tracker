import { prisma } from '../db/prisma';

export type GoalsListFilters = {
  status?: string;
  priority?: number;
};

export const goalsRepository = {
  createGoal(data: { title: string; description?: string; priority?: number }) {
    return prisma.goal.create({
      data: {
        title: data.title,
        description: data.description,
        priority: data.priority ?? 3,
      },
    });
  },

  listGoals(filters: GoalsListFilters) {
    const where: Prisma.GoalWhereInput = {};
    if (filters.status) where.status = filters.status;
    if (typeof filters.priority === 'number') where.priority = filters.priority;

    return prisma.goal.findMany({
      where,
      orderBy: [{ priority: 'desc' }, { createdAt: 'desc' }],
      include: { steps: true },
    });
  },

  getGoalById(id: string) {
    return prisma.goal.findUnique({
      where: { id },
      include: { steps: true },
    });
  },

  updateGoalStatus(id: string, status: string) {
    return prisma.goal.update({
      where: { id },
      data: { status },
      include: { steps: true },
    });
  },

  addStep(goalId: string, title: string) {
    return prisma.step.create({
      data: { goalId, title },
    });
  },

  toggleStep(stepId: string, done: boolean) {
    return prisma.step.update({
      where: { id: stepId },
      data: { done },
    });
  },

  listSteps(goalId: string) {
    return prisma.step.findMany({
      where: { goalId },
      orderBy: { createdAt: 'asc' },
    });
  },
};

import { z } from 'zod';

export const createGoalSchema = z.object({
  title: z.string().min(3, 'Title too short'),
  description: z.string().optional(),
  priority: z.number().min(1).max(5).optional(),
});

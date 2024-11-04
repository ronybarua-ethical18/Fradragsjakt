import { z } from 'zod';

const categorySchema = z.object({
  name: z.string().min(1),
  created_by: z.enum(['USER', 'SYSTEM']).optional(),
  creator_id: z.string().optional(),
});
export const categoryValidation = { categorySchema };

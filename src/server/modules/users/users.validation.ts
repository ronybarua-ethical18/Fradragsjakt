import { z } from 'zod'; // Import Zod for validation

const userSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().optional(),
  provider: z.enum(['credentials', 'google']).optional(),
  role: z.enum(['admin', 'auditor', 'customer']).optional(),
  image: z.string().optional(),
  questionnaires: z
    .array(
      z.object({
        question: z.string(),
        answers: z.array(z.string()),
      })
    )
    .optional(),
  isVerified: z.boolean().optional(),
});
export const userValidation = { userSchema };

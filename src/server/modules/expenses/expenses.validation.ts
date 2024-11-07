import { z } from 'zod';

const createExpenseSchema = z.object({
  description: z.string({
    required_error: 'Description is required',
  }),
  expense_type: z.enum(['Personal', 'Business', 'Unknown'], {
    required_error: 'Expense type is required',
  }),
  category: z.string({
    required_error: 'Category is required',
  }),
  amount: z.number({
    required_error: 'Amount is required',
  }),
});

export const expenseValidation = { createExpenseSchema };

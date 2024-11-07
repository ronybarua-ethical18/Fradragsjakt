import { ExpenseType, IExpense } from '../db/interfaces/expense';
import { IRule } from '../db/interfaces/rules';
import ExpenseModel from '../db/models/expense';
import RuleModel from '../db/models/rules';

async function findMatchingRule(description: string, userId: string) {
  return await RuleModel.findOne({
    description: { $regex: description, $options: 'i' },
    user: userId,
  });
}

async function createExpenseRecord(
  input: IExpense,
  rule: IRule,
  userId: string
) {
  return await ExpenseModel.create({
    ...input,
    user: userId,
    expense_type:
      rule?.expense_type || input.expense_type || ExpenseType.unknown,
    category: rule?.category || input.category || 'unknown',
  });
}

export const ExpenseHelpers = {
  findMatchingRule,
  createExpenseRecord,
};

import { ExpenseType, IExpense } from '../db/interfaces/expense';
// import { IRule } from '../db/interfaces/rules';
import CategoryModel from '../db/models/category';
import ExpenseModel from '../db/models/expense';
import RuleModel from '../db/models/rules';

// async function findMatchingRule(description: string, userId: string) {
//   return await RuleModel.findOne({
//     description: { $regex: description, $options: 'i' },
//     user: userId,
//   });
// }

async function createExpenseRecord(input: IExpense, userId: string) {
  // Upsert category
  const category = await CategoryModel.findOneAndUpdate(
    {
      title: input.category,
      creator_id: userId,
    },
    {
      $setOnInsert: {
        title: input.category,
        creator_id: userId,
      },
    },
    { upsert: true, new: true }
  );
  // Upsert rule
  const updatedRule = await RuleModel.findOneAndUpdate(
    {
      description_contains: input.description,
      user: userId,
    },
    {
      $setOnInsert: {
        expense_type: input.expense_type,
        category_title: input.category,
        category: category._id,
      },
    },
    { upsert: true, new: true }
  );

  // Create the expense record with updated or default rule and category information
  return await ExpenseModel.create({
    ...input,
    user: userId,
    expense_type:
      updatedRule?.expense_type || input.expense_type || ExpenseType.unknown,
    category: category?.title || input.category || 'unknown',
    rule: updatedRule?._id,
  });
}

export const ExpenseHelpers = {
  //   findMatchingRule,
  createExpenseRecord,
};

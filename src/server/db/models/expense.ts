import { Schema, model } from 'mongoose';
import { ExpenseType, IExpense } from '../interfaces/expense';

const ExpenseSchema = new Schema<IExpense>(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    expense_type: {
      type: String,
      enum: Object.values(ExpenseType),
      default: ExpenseType.unknown,
    },
    amount: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ExpenseModel = model<IExpense>('expense', ExpenseSchema);

export default ExpenseModel;

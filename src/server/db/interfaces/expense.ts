import { Document, Types } from 'mongoose';

export enum ExpenseType {
  business = 'business',
  personal = 'personal',
  unknown = 'unknown',
}

export interface IExpense extends Document {
  description: string;
  category: string;
  expense_type: ExpenseType;
  amount: number;
  user: Types.ObjectId;
}

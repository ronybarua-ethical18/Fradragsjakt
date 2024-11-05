import { Document, Types } from 'mongoose';

enum ExpenseType {
  personal = 'personal',
  business = 'business',
}
export interface IRule extends Document {
  description_contains: string;
  expense_type: ExpenseType;
  category_title: string;
  category: Types.ObjectId | string;
  user: Types.ObjectId;
}

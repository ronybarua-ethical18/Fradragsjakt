import { Document, Types } from 'mongoose';

export interface ICategory extends Document {
  title: string;
  created_by: string;
  creator_id: Types.ObjectId;
}

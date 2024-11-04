import { Document, ObjectId } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  created_by: string;
  creator_id: ObjectId;
}

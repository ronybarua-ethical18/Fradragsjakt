import mongoose, { Schema } from 'mongoose';
import { ICategory } from '../interfaces/category';

const CategorySchema: Schema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    created_by: {
      type: String,
      enum: ['USER', 'SYSTEM'],
      default: 'USER',
    },
    creator_id: { type: String, required: true },
  },

  { timestamps: true }
);

const Category =
  mongoose.models.Category ||
  mongoose.model<ICategory>('Category', CategorySchema);

export default Category;

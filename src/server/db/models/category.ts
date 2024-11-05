import mongoose, { Schema } from 'mongoose';
import { ICategory } from '../interfaces/category';

const CategorySchema: Schema = new Schema<ICategory>(
  {
    title: { type: String, required: true, unique: true },
    created_by: {
      type: String,
      enum: ['USER', 'SYSTEM'],
      default: 'USER',
    },
    creator_id: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  },

  { timestamps: true }
);

const CategoryModel =
  mongoose.models.Category ||
  mongoose.model<ICategory>('Category', CategorySchema);

export default CategoryModel;

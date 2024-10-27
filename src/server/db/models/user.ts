import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/user';

const UserSchema: Schema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: function () {
        // Password is required only for users signing up directly (without OAuth)
        return this.provider === 'credentials';
      },
    },
    provider: {
      type: String,
      enum: ['credentials', 'google'],
      default: 'credentials',
    },
    role: {
      type: String,
      enum: ['admin', 'auditor', 'customer'],
      required: true,
    },
    image: {
      type: String,
    },

    questionnaires: [
      {
        question: { type: String, required: true },
        answers: [String],
      },
    ],
    isVerified: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;

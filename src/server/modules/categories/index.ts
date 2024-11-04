import User from '@/server/db/models/user';
import { protectedProcedure } from '@/server/middlewares/with-auth';
import { router } from '@/server/trpc';
import { JwtPayload } from 'jsonwebtoken';
import { userValidation } from '../users/users.validation';
import { categoryValidation } from './categories.validation';
import Category from '@/server/db/models/category';

export const categoryRouter = router({
  getUsers: protectedProcedure.query(async ({ ctx }) => {
    const loggedUser = ctx.user as JwtPayload;
    const users = await User.find({});

    return {
      users,
      loggedUser,
    };
  }),

  getUserByEmail: protectedProcedure.query(async ({ ctx }) => {
    const sessionUser = ctx.user as JwtPayload;

    if (!sessionUser || !sessionUser?.email) {
      throw new Error('You must be logged in to access this data.');
    }
    const user = await User.findOne({ email: sessionUser.email });

    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }),

  updateUser: protectedProcedure
    .input(userValidation.userSchema)
    .mutation(async ({ ctx, input }) => {
      const { questionnaires } = input;

      const sessionUser = ctx.user as JwtPayload;
      if (!sessionUser || !sessionUser?.email) {
        throw new Error('You must be logged in to update this data.');
      }

      const user = await User.findOneAndUpdate(
        { email: sessionUser.email },
        { questionnaires: questionnaires },
        { new: true }
      );

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    }),
  createCategory: protectedProcedure
    .input(categoryValidation.categorySchema)
    .mutation(async ({ ctx, input }) => {
      const { name } = input;

      const sessionUser = ctx.user as JwtPayload;
      if (!sessionUser || !sessionUser?.email) {
        throw new Error('You must be logged in to update this data.');
      }

      const category = new Category({
        name,
        creator_id: sessionUser.id,
      });
      await category.save();

      if (!category) {
        throw new Error('Category not found');
      }

      return category;
    }),
});

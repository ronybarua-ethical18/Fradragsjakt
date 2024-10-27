import User from '@/server/db/models/user';
import { protectedProcedure } from '@/server/middlewares/with-auth';
import { router } from '@/server/trpc';
import { JwtPayload } from 'jsonwebtoken';
import { userValidation } from './users.validation';

export const userRouter = router({
  // Get all users and the logged-in user from the session
  getUsers: protectedProcedure.query(async ({ ctx }) => {
    const loggedUser = ctx.user as JwtPayload; // Retrieve the logged-in user from context
    const users = await User.find({}); // Fetch all users

    return {
      users,
      loggedUser,
    };
  }),

  getUserById: protectedProcedure.query(async ({ ctx }) => {
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
        { new: true } // This option returns the updated document
      );

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    }),
});

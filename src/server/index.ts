import { router } from './trpc';
import { userRouter } from './modules/users';
import { authRouter } from './modules/auth';
import { categoryRouter } from './modules/categories';

export const appRouter = router({
  users: userRouter,
  auth: authRouter,
  categories: categoryRouter,
});

export type AppRouter = typeof appRouter;

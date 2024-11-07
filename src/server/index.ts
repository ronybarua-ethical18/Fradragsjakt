// /server/router.ts
import { router } from './trpc';
import { userRouter } from './modules/users';
import { authRouter } from './modules/auth';
import { rulesRouter } from './modules/rules';
import { categoryRouter } from './modules/categories';
import { expenseRouter } from './modules/expenses';

export const appRouter = router({
  users: userRouter,
  auth: authRouter,
  rules: rulesRouter,
  categories: categoryRouter,
  expenses: expenseRouter,
});

export type AppRouter = typeof appRouter;

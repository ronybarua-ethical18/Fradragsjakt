// /server/router.ts
import { router } from "./trpc";
import { userRouter } from "./modules/users";
import { authRouter } from "./modules/auth";

export const appRouter = router({
  users: userRouter,
  auth: authRouter,
  // Add more routers as necessary
});

export type AppRouter = typeof appRouter;

import { TRPCError } from '@trpc/server';
import { middleware, publicProcedure } from '../trpc';

type User = {
  name?: string | null;
  email?: string | null;
  role?: string | null;
} | null;

// Define a type for your context
type Context = {
  user?: User | null;
};

const withAuth = middleware(async ({ ctx, next }) => {
  const contextWithSession = ctx as Context;

  if (!contextWithSession.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({
    ctx: {
      ...contextWithSession,
      session: contextWithSession.user,
    },
  });
});

export const protectedProcedure = publicProcedure.use(withAuth);

// /server/trpc.ts
import { initTRPC } from "@trpc/server";
import { createContext } from "./context";

// Initialize tRPC
export const t = initTRPC.context<ReturnType<typeof createContext>>().create();

// Export the main router
export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;


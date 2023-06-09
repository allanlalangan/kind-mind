import { createTRPCRouter } from "~/server/api/trpc";
import { entriesRouter } from "./routers/entries";
import { guestEntriesRouter } from "./routers/guestEntriesRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  entries: entriesRouter,
  guestEntries: guestEntriesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

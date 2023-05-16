import { createTRPCRouter } from "@/server/api/trpc";
import { noteRouter } from "@/server/api/routers/note";
import { folderRouter } from "@/server/api/routers/folder";
import { profileRouter } from "@/server/api/routers/profile";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  note: noteRouter,
  folder: folderRouter,
  profile: noteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

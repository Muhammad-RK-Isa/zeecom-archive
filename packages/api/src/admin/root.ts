import { z } from "zod";

import { createAdminRouter, publicAdminProcedure } from "./trpc";

export const adminRouter = createAdminRouter({
  test: publicAdminProcedure.query(() => "Test passed!!!"),
  mirror: publicAdminProcedure
    .input(z.string())
    .mutation(async ({ input }) => input),
});

export type AdminRouter = typeof adminRouter;

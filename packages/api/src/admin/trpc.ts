import { initTRPC } from "@trpc/server";
import SuperJSON from "superjson";
import { ZodError } from "zod";

export const createAdminContext = ({ headers }: { headers: Headers }) => {
  return {};
};

const t = initTRPC
  .context<Awaited<ReturnType<typeof createAdminContext>>>()
  .create({
    transformer: SuperJSON,
    errorFormatter({ shape, error }) {
      return {
        ...shape,
        data: {
          ...shape.data,
          zodError:
            error.cause instanceof ZodError ? error.cause.flatten() : null,
        },
      };
    },
  });

export const createAdminRouter = t.router;

export const publicAdminProcedure = t.procedure;

export const createCallerFactory = t.createCallerFactory;

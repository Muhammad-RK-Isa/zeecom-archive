import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

import type { AdminRouter } from "./root";
import { adminRouter } from "./root";
import { createCallerFactory, createAdminContext } from "./trpc";

/**
 * Create a server-side caller for the tRPC API
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
const createCaller = createCallerFactory(adminRouter);

/**
 * Inference helpers for input types
 * @example
 * type PostByIdInput = AdminRouterInputs['post']['byId']
 *      ^? { id: number }
 **/
type AdminRouterInputs = inferRouterInputs<AdminRouter>;

/**
 * Inference helpers for output types
 * @example
 * type AllPostsOutput = AdminRouterOutputs['post']['all']
 *      ^? Post[]
 **/
type AdminRouterOutputs = inferRouterOutputs<AdminRouter>;

export { createAdminContext, adminRouter, createCaller };
export type { AdminRouter, AdminRouterInputs, AdminRouterOutputs };

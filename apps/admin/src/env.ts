import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets";
import { z } from "zod";

export const env = createEnv( {
  extends: [ vercel() ],
  shared: {
    NODE_ENV: z
      .enum( [ "development", "test", "production" ] )
      .default( "development" ),
  },
  server: {
    DATABASE_URL: z.string().url(),
  },
  client: {
  },
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
  skipValidation: 
     process.env.npm_lifecycle_event === "lint",
  emptyStringAsUndefined: true,
} );

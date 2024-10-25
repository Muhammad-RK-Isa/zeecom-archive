import { fileURLToPath } from "url";
import { createJiti } from "jiti";

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
await createJiti( fileURLToPath( import.meta.url ) ).import( "./src/env" );

/** @type {import("next").NextConfig} */
const config = {};

export default config;

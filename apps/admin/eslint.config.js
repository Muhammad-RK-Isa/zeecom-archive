import baseConfig, { restrictEnvAccess } from "@zeecom/eslint-config/base";
import nextjsConfig from "@zeecom/eslint-config/nextjs";
import reactConfig from "@zeecom/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];

import { type Config } from "tailwindcss";

import base from "@zeecom/tailwind-config/web"

export default {
  content: [...base.content],
  presets: [base],
  theme: {
    extend: {
    },
  },
} satisfies Config;

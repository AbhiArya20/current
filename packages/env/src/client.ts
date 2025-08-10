import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const clientEnv = createEnv({
  clientPrefix: "NEXT_PUBLIC_",

  emptyStringAsUndefined: true,

  client: {
    NEXT_PUBLIC_BACKEND_URL: z.url(),
    NEXT_PUBLIC_FRONTEND_URL: z.url(),
  },

  runtimeEnv: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
  },
});

export const validateClientEnv = () => clientEnv;

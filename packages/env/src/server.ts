import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const serverEnv = createEnv({
  emptyStringAsUndefined: true,

  server: {
    DATABASE_URL: z.url(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
  },

  runtimeEnv: process.env,
});

export const validateServerEnv = () => serverEnv;

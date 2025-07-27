import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const serverEnv = createEnv({
  emptyStringAsUndefined: true,

  server: {
    DATABASE_URL: z.url({
      error:
        "The environment variable DATABASE_URL is required and must be a valid POSTGRES URL.",
    }),
    GOOGLE_CLIENT_ID: z.string({
      error: "The environment variable GOOGLE_CLIENT_ID is required.",
    }),
    GOOGLE_CLIENT_SECRET: z.string({
      error: "The environment variable GOOGLE_CLIENT_SECRET is required.",
    }),
  },

  runtimeEnv: process.env,
});

export const validateServerEnv = () => serverEnv;

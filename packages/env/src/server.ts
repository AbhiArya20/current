import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

const serverEnv = createEnv({
  emptyStringAsUndefined: true,

  server: {
    DATABASE_URL: z.url({
      error:
        "The environment variable DATABASE_URL is required and must be a valid POSTGRES URL.",
    }),
  },

  runtimeEnv: process.env,
});

export const validateServerEnv = () => serverEnv;

export default serverEnv;

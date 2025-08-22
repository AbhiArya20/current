import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const serverEnv = createEnv({
  emptyStringAsUndefined: true,

  server: {
    DATABASE_URL: z.url(),

    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_URL: z.url(),

    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),

    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),

    GITLAB_CLIENT_ID: z.string(),
    GITLAB_CLIENT_SECRET: z.string(),
    GITLAB_ISSUER: z.url(),
  },

  runtimeEnv: process.env,
});

export const validateServerEnv = () => serverEnv;

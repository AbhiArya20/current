import { SocialProviders } from "better-auth/social-providers";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { betterAuth, BetterAuthOptions } from "better-auth";
import { serverEnv } from "@current/env/server";
import { createDb } from "@current/db/client";
import schema from "@current/db/schema";

export const authServer = betterAuth(createAuthConfig());

function createAuthConfig(): BetterAuthOptions {
  const db = createDb(serverEnv.DATABASE_URL);

  return {
    database: drizzleAdapter(db, {
      provider: "pg",
      schema: { schema },
    }),

    socialProviders: getSocialMediaProviders(),
    user: {
      modelName: "current_users",
    },
    session: {
      modelName: "current_sessions",
    },
    verification: {
      modelName: "current_verification",
    },
    account: {
      modelName: "current_accounts",
    },
  };
}

function getSocialMediaProviders(): SocialProviders {
  return {
    google: {
      clientId: serverEnv.GOOGLE_CLIENT_ID,
      clientSecret: serverEnv.GOOGLE_CLIENT_SECRET,
    },
  };
}

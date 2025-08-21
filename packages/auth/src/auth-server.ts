import { SocialProviders } from "better-auth/social-providers";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { betterAuth, BetterAuthOptions } from "better-auth";
import { passkey } from "better-auth/plugins/passkey";
import { serverEnv } from "@current/env/server";
import { createDb } from "@current/db/client";
import schema from "@current/db/schema";

type ProviderConfig = {
  id: string;
  name: string;
  requiredEnvs: string[];
  config: SocialProviders[keyof SocialProviders];
  required?: boolean;
};

const authProviders = (env: typeof serverEnv): ProviderConfig[] => [
  {
    id: "google",
    name: "Google",
    requiredEnvs: ["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET"],
    config: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
    required: true,
  },
];

function isProviderEnabled(
  provider: ProviderConfig,
  env: Record<string, string>,
) {
  return provider.requiredEnvs.every((e) => !!env[e]);
}

function getSocialMediaProviders(env: typeof serverEnv): SocialProviders {
  const socialProviders: SocialProviders = Object.fromEntries(
    authProviders(env)
      .map((provider) => {
        if (isProviderEnabled(provider, env)) {
          return [provider.id, provider.config];
        } else if (provider.required) {
          throw new Error(
            `Social provider ${provider.name} is required but not configured. Check your environment variables.`,
          );
        } else {
          console.log(
            `Social provider ${provider.name} is not configured properly. Skipping...`,
          );
          return null;
        }
      })
      .filter((provider) => provider !== null),
  );

  return socialProviders;
}

function createAuthConfig(): BetterAuthOptions {
  const { db } = createDb(serverEnv.DATABASE_URL);

  return {
    appName: "Current",
    database: drizzleAdapter(db, {
      provider: "pg",
      schema: { schema },
    }),
    socialProviders: getSocialMediaProviders(serverEnv),
    emailAndPassword: {
      enabled: true,
      async sendResetPassword(data, request) {},
    },
    plugins: [passkey()],
  };
}

export const authServer = betterAuth(createAuthConfig());

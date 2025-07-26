import { passkeyClient, twoFactorClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { clientEnv } from "@current/env/client";

export const { signIn, signUp, signOut, useSession } = createAuthClient({
  baseURL: clientEnv.NEXT_PUBLIC_BACKEND_URL,
  fetchOptions: {},
  plugins: [
    passkeyClient(),
    twoFactorClient({
      // twoFactorPage: "/two-factor",
    }),
  ],
});

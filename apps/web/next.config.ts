import { validateServerEnv } from "@current/env/server";
import { validateClientEnv } from "@current/env/client";
import { p } from "motion/react-client";
import { NextConfig } from "next";

validateClientEnv();
validateServerEnv();

const nextConfig: NextConfig = {
  transpilePackages: ["@current/ui", "@current/env", "@t3-oss/env-core"],
  reactStrictMode: true,
  output: "standalone",
  redirects: async () => [
    {
      source: "/signin",
      destination: "/sign-in",
      permanent: true,
    },
    {
      source: "/login",
      destination: "/sign-in",
      permanent: true,
    },
    {
      source: "/auth/signin",
      destination: "/sign-in",
      permanent: true,
    },
    {
      source: "/auth/login",
      destination: "/sign-in",
      permanent: true,
    },
    {
      source: "/signup",
      destination: "/sign-up",
      permanent: true,
    },
    {
      source: "/register",
      destination: "/sign-up",
      permanent: true,
    },
    {
      source: "/auth/signup",
      destination: "/sign-up",
      permanent: true,
    },
    {
      source: "/auth/register",
      destination: "/sign-up",
      permanent: true,
    },
    {
      source: "/privacy",
      destination: "/privacy-policy",
      permanent: true,
    },
  ],
};

export default nextConfig;

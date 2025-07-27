import { validateServerEnv } from "@current/env/server";
import { validateClientEnv } from "@current/env/client";
import { NextConfig } from "next";

validateClientEnv();
validateServerEnv();

const nextConfig: NextConfig = {
  transpilePackages: ["@current/ui", "@current/env", "@t3-oss/env-core"],
  reactStrictMode: true,
  output: "standalone",
};

export default nextConfig;

// TODO: add handlers to redirect to /sign-in if user access /signin or /login or auth/sign-in or auth/login
// TODO: add handlers to redirect to /sign-up if user access /signup or /register or auth/sign-up or auth/register

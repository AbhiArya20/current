import { validateClientEnv } from "@current/env/client";
import { validateServerEnv } from "@current/env/server";
import { NextConfig } from "next";

validateClientEnv();
validateServerEnv();

const nextConfig: NextConfig = {
  transpilePackages: ["@current/ui", "@current/env", "@t3-oss/env-core"],
  reactStrictMode: true,
  output: "standalone",
};

export default nextConfig;

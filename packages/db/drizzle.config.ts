import { defineConfig } from "drizzle-kit";
import { serverEnv } from "@current/env";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema",

  dbCredentials: {
    url: serverEnv.DATABASE_URL,
  },
});

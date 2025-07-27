import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "Whoa there! The DATABASE_URL environment variable is missing. Did you forget to feed your database today?",
  );
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema",

  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});

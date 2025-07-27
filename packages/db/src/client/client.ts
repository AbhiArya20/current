import { drizzle as drizzleNode } from "drizzle-orm/node-postgres";
import { drizzle as drizzleJs } from "drizzle-orm/postgres-js";
import schema from "@current/db/schema";
import postgres from "postgres";
import { Pool } from "pg";

const isEdge = true;

export const createDb = (url: string) => {
  const db = isEdge
    ? drizzleJs(postgres(url, { prepare: false }), { schema })
    : drizzleNode(
        new Pool({
          connectionString: url,
        }),
        { schema },
      );

  return db;
};

export type DB = ReturnType<typeof createDb>;

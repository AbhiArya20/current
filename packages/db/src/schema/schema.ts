import { integer, pgSchema, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { createSelectSchema } from 'drizzle-zod';

export const currentSchema = pgSchema('current');


// const createTable = currentSchema.tableCreator((name)=>)
// export const users1 = customSchema.table('users', {
//   id: integer()
// })

// const timestamps = {
//   updated_at: timestamp(),
//   created_at: timestamp().defaultNow().notNull(),
//   deleted_at: timestamp(),
// }

// export const usersTable = pgTable("users", {
//   id: integer().primaryKey().generatedAlwaysAsIdentity(),
//   name: varchar({ length: 255 }).notNull(),
//   age: integer().notNull(),
//   email: varchar({ length: 255 }).notNull().unique(),
//   ...timestamps,
// });


// export const rolesEnum = pgEnum("roles", ["guest", "user", "admin"]);
// export const users = table(
//   "users",
//   {
//     id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
//     firstName: t.varchar("first_name", { length: 256 }),
//     lastName: t.varchar("last_name", { length: 256 }),
//     email: t.varchar().notNull(),
//     invitee: t.integer().references((): AnyPgColumn => users.id),
//     role: rolesEnum().default("guest"),
//     value: t.integer().default(0),
//   },
//   (table) => [
//     t.uniqueIndex("email_idx").on(table.email)
//   ]
// );
// export const posts = table(
//   "posts",
//   {
//     id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
//     slug: t.varchar().$default(() => generateUniqueString(16)),
//     title: t.varchar({ length: 256 }),
//     ownerId: t.integer("owner_id").references(() => users.id),
//   },
//   (table) => [
//     t.uniqueIndex("slug_idx").on(table.slug),
//     t.index("title_idx").on(table.title),
//   ]
// );
// export const comments = table("comments", {
//   id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
//   text: t.varchar({ length: 256 }),
//   postId: t.integer("post_id").references(() => posts.id),
//   ownerId: t.integer("owner_id").references(() => users.id),
// });

// function generateUniqueString(length: number = 12): string {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let uniqueString = "";
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     uniqueString += characters[randomIndex];
//   }
//   return uniqueString;
// }






// // const userSelectSchema = createSelectSchema(users, {
// //   name: (schema) => schema.max(20), // Extends schema
// //   bio: (schema) => schema.max(1000), // Extends schema before becoming nullable/optional
// //   preferences: z.object({ theme: z.string() }) // Overwrites the field, including its nullability
// // });


// export const userSelectSchema = createSelectSchema(users);
// export type User = z.infer<typeof userSelectSchema>;
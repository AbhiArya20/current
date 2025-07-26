import { users, posts } from "@/schema/schema";
import { getDb } from "@/client/client";
import { seed } from "drizzle-seed";

const db = getDb();

async function main() {
  await seed(
    db,
    { users },
    {
      count: 100,
    },
  );

  await seed(db, { users, posts }).refine((f) => ({
    users: {
      count: 20,
      with: {
        posts: 10,
      },
    },
  }));

  // const user: typeof usersTable.$inferInsert = {
  //   name: "John",
  //   age: 30,
  //   email: "john@example.com",
  // };

  // await db.insert(usersTable).values(user);
  // console.log("New user created!");

  // const users = await db.select().from(usersTable);
  // console.log("Getting all users from the database: ", users);
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

  // await db
  //   .update(usersTable)
  //   .set({
  //     age: 31,
  //   })
  //   .where(eq(usersTable.email, user.email));
  // console.log("User info updated!");

  // await db.delete(usersTable).where(eq(usersTable.email, user.email));
  // console.log("User deleted!");
}

main();

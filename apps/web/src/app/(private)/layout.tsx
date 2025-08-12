import { authServer } from "@current/auth/auth-server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function PublicLayout() {
  const session = await authServer.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      {JSON.stringify(session)}
    </div>
  );
}

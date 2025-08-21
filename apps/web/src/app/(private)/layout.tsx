export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await authServer.api.getSession({
  //   headers: await headers(),
  // });

  // if (!session) {
  //   redirect("/auth/sign-in");
  // }

  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
}

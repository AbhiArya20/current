"use client";

import SignInCard from "@/components/auth/sign-in-card";

export default function SignIn() {
  const isAlreadySignedIn = false;

  return (
    <SignInCard
      title={isAlreadySignedIn ? "Welcome back" : "Welcome to Current"}
      description="Sign in below to increase your message limits."
    />
  );
}

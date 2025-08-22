"use client";

import AuthCard from "@/components/auth/auth-card";

export default function SignIn() {
  const isAlreadySignedIn = false;

  return (
    <div className="max-w-sm sm:px-6">
      <AuthCard
        title={isAlreadySignedIn ? "Welcome back" : "Welcome to Current"}
        description="Sign in below to increase your message limits."
      />
    </div>
  );
}

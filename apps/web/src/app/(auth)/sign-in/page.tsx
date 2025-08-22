"use client";

import AuthCard from "@/components/auth/auth-card";
import { useLocalStorage } from "react-use";

export default function SignIn() {
  const [hasSignedInBefore] = useLocalStorage<boolean>(
    "signin-in-earlier",
    false,
  );

  return (
    <div className="max-w-sm sm:px-6">
      <AuthCard
        title={hasSignedInBefore ? "Welcome back" : "Welcome to Current"}
        description="Sign in below to increase your message limits."
      />
    </div>
  );
}

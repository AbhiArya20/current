import AuthCard from "@/components/auth/auth-card";
import React from "react";

export default function SignUp() {
  return (
    <div className="max-w-sm sm:px-6">
      <AuthCard
        title="Create an account"
        description="Sign up to save chats, sync, and unlock more features"
        mode="sign-up"
      />
    </div>
  );
}

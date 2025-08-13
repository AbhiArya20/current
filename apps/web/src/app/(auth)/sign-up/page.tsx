import SignInCard from "@/components/auth/sign-in-card";
import React from "react";

export default function SignUp() {
  return (
    <SignInCard
      title="Create an account"
      description="Sign up to save chats, sync, and unlock more features"
      mode="sign-up"
    />
  );
}

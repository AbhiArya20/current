import SignUpCard from "@/components/auth/sign-up-card";
import SignInCard from "@/components/auth/sign-in-card";
import React from "react";

export default function SignUp() {
  const isEmailAuthEnabled = true;
  return isEmailAuthEnabled ? (
    <SignUpCard />
  ) : (
    <SignInCard
      title="Create an account"
      description="Get started with Current today"
      mode="sign-up"
    />
  );
}

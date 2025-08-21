import LogoName from "@/components/logos/logo-name";
import Logo from "@/components/logos/logo";
import React from "react";

export default function LogoWithName() {
  return (
    <div className="flex items-center gap-2">
      <Logo className="size-8" />
      <LogoName />
    </div>
  );
}

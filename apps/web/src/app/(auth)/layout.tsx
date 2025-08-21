import LogoWithName from "@/components/logos/logo-with-name";
import { ReactNode } from "react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute top-4 left-4 lg:top-8 lg:left-8">
        <Link href="/">
          <LogoWithName />
        </Link>
      </div>
      <div className="hidden lg:flex lg:w-1/2 h-full flex-col bg-muted/30 justify-center items-center">
        Add Animated image here
      </div>
      <div className="flex-1 h-full flex justify-center items-center px-4 ">
        {children}
      </div>
    </div>
  );
}

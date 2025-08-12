import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="hidden lg:flex flex-1 h-full flex-col bg-muted/30"></div>
      <div className="flex-1 h-full flex justify-center items-center px-4 ">
        {children}
      </div>
    </div>
  );
}

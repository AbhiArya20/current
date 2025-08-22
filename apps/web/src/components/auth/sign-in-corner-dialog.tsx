"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@current/ui/components/dialog";
import AuthCard from "@/components/auth/auth-card";
import { useState } from "react";

export default function SignInCornerDialog() {
  const isAlreadySignedIn = false;

  const title = isAlreadySignedIn ? "Welcome back" : "Welcome to Current";
  const description = "Sign in below to increase your message limits.";

  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={!open}>
      <DialogContent
        className="sm:max-w-xs top-full left-full -translate-[calc(100%+.5rem)] px-4"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <AuthCard title={title} description={description} isDialog />
      </DialogContent>
    </Dialog>
  );
}

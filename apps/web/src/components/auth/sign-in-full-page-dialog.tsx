"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@current/ui/components/dialog";
import SignInCard from "@/components/auth/sign-in-card";
import { useState } from "react";

export function SignInFullPageDialog() {
  const [open, setOpen] = useState(true);

  const title = "Welcome back";
  const description =
    "To use Current you must log into an existing account or create one using one of the options below";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="rounded-none place-content-center  shadow-none h-full sm:max-w-full border-none place-center">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <SignInCard title={title} description={description} isDialog />
      </DialogContent>
    </Dialog>
  );
}

"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@current/ui/components/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@current/ui/components/dialog";
import SignInCard from "@/components/auth/sign-in-card";
import { useMedia } from "react-use";
import { useState } from "react";

export function SignInDialog() {
  const [open, setOpen] = useState(true);
  const isDesktop = useMedia("(min-width: 768px)");

  const title = "Welcome back";
  const description =
    "To use Current you must log into an existing account or create one using one of the options below";

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="sr-only">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <SignInCard title={title} description={description} isDialog />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="data-[vaul-drawer-direction=bottom]:rounded-t-4xl items-center">
        <DrawerHeader className="text-left">
          <DrawerTitle className="sr-only">{title}</DrawerTitle>
          <DrawerDescription className="sr-only">
            {description}
          </DrawerDescription>
        </DrawerHeader>
        <SignInCard title={title} description={description} isDialog />
      </DrawerContent>
    </Drawer>
  );
}

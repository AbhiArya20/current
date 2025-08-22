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
import AuthCard from "@/components/auth/auth-card";
import { useState } from "react";

export function SignInDialog() {
  const [open, setOpen] = useState(true);

  const title = "Welcome back";
  const description =
    "To use Current you must log into an existing account or create one using one of the options below";

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md flex md:block">
          <DialogHeader className="sr-only">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <AuthCard title={title} description={description} isDialog />
        </DialogContent>
      </Dialog>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="data-[vaul-drawer-direction=bottom]:rounded-t-4xl items-center flex sm:hidden">
          <DrawerHeader className="sr-only">
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          <DrawerHeader className="text-left">
            <DrawerTitle className="sr-only">{title}</DrawerTitle>
            <DrawerDescription className="sr-only">
              {description}
            </DrawerDescription>
          </DrawerHeader>
          <AuthCard title={title} description={description} isDialog />
        </DrawerContent>
      </Drawer>
    </>
  );
}

"use client";

import { Button } from "@current/ui/components/button";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { Variants } from "motion/react";
import { motion } from "motion/react";
import Link from "next/link";

export const variant: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      startTime: 5,
      staggerChildren: 0.2,
      staggerDirection: 1,
      duration: 0.2,
    },
  },
};

export const childVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Error() {
  return (
    <motion.section
      className="flex w-full flex-1 flex-col items-center justify-center p-4 text-center min-h-screen"
      variants={variant}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={childVariants}
        className={"text-7xl font-extrabold sm:text-9xl text-destructive"}
      >
        500
      </motion.h1>
      <motion.p
        variants={childVariants}
        className="text-muted-foreground mt-2 mb-6 text-lg"
      >
        We’re sorry, something went wrong on our end.
      </motion.p>
      <motion.div
        variants={childVariants}
        className="flex item-center justify-center gap-4 flex-wrap"
      >
        <Button
          asChild
          className="bg-primary hover:bg-primary/80 flex items-center justify-center gap-2 cursor-pointer"
          aria-label="go-to-home"
          onClick={() => window.location.reload()}
        >
          <span>
            <RefreshCw /> Try again
          </span>
        </Button>

        <Link href="/" passHref>
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/80 flex items-center justify-center gap-2"
            aria-label="go-to-home"
          >
            <span>
              <ArrowLeft /> Return to home
            </span>
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
}

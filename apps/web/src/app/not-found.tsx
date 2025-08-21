"use client";

import { Button } from "@current/ui/components/button";
import { ArrowLeft } from "lucide-react";
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

export default function NotFound() {
  return (
    <motion.section
      className="flex min-h-screen w-full flex-1 flex-col items-center justify-center p-4 text-center"
      variants={variant}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={childVariants}
        className={"text-7xl font-extrabold sm:text-9xl"}
      >
        404
      </motion.h1>
      <motion.p
        variants={childVariants}
        className="text-muted-foreground mt-2 mb-6 text-lg"
      >
        Hmm, we looked everywhere — but that page isn’t here.
      </motion.p>
      <motion.div variants={childVariants}>
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

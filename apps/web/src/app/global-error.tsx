"use client";

import { RefreshCw, TriangleAlert } from "lucide-react";
import { Button } from "@current/ui/components/button";
import { Inter } from "next/font/google";
import { Variants } from "motion/react";
import { motion } from "motion/react";
import "@current/ui/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  preload: true,
  weight: "variable",
  display: "swap",
});

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

export default function GlobalError() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <motion.section
          className="flex w-full flex-1 flex-col items-center justify-center p-4 text-center min-h-screen"
          variants={variant}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={childVariants}>
            <TriangleAlert className="size-16 sm:size-32  text-destructive" />
          </motion.span>
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
          </motion.div>
        </motion.section>
      </body>
    </html>
  );
}

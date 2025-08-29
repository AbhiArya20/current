"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@current/ui/components/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@current/ui/components/sheet";
import { signIn, useSession } from "@current/auth/auth-client";
import { AnimatedNumber } from "@/components/animated-number";
import { Separator } from "@current/ui/components/separator";
import { Button } from "@current/ui/components/button";
import LogoWithName from "../logos/logo-with-name";
import React, { useState, useEffect } from "react";
import { icons } from "@/components/icons/icons";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { cn } from "@current/ui/lib/utils";
import { Menu, Star } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import Link from "next/link";

const resources = [
  {
    title: "GitHub",
    href: "https://github.com/Mail-0/Zero",
    description: "Check out our open-source projects and contributions.",
    platform: "github" as const,
  },
  {
    title: "Twitter",
    href: "https://x.com/current",
    description: "Follow us for the latest updates and announcements.",
    platform: "twitter" as const,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/current/",
    description: "Connect with us professionally and stay updated.",
    platform: "linkedin" as const,
  },
  {
    title: "Discord",
    href: "https://discord.gg/current",
    description: "Join our community and chat with the team.",
    platform: "discord" as const,
  },
];

const aboutLinks = [
  {
    title: "About",
    href: "/about",
    description: "Learn more about Zero and our mission.",
  },
  {
    title: "Privacy",
    href: "/privacy",
    description: "Read our privacy policy and data handling practices.",
  },
  {
    title: "Terms of Service",
    href: "/terms",
    description: "Review our terms of service and usage guidelines.",
  },
  {
    title: "Contributors",
    href: "/contributors",
    description: "See the contributors to Zero.",
  },
];

interface GitHubApiResponse {
  stargazers_count: number;
}

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [stars, setStars] = useState(0); // Default fallback value
  const { data: session } = useSession();
  const router = useRouter();

  const { data: githubData } = useQuery({
    queryKey: ["githubStars"],
    queryFn: async () => {
      const response = await fetch("https://api.github.com/repos/Mail-0/Zero", {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch GitHub stars");
      }
      return response.json() as Promise<GitHubApiResponse>;
    },
  });

  useEffect(() => {
    if (githubData) {
      setStars(githubData.stargazers_count || 0);
    }
  }, [githubData]);

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <header className="fixed left-[50%] z-50 hidden w-full max-w-4xl translate-x-[-50%] items-center justify-center px-4 pt-6 lg:flex">
        <nav className="border-input/50 flex w-full max-w-4xl items-center justify-between gap-2 rounded-xl border-t bg-[#1E1E1E] p-3 px-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="relative cursor-pointer">
              <LogoWithName />
            </Link>
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white cursor-pointer">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[400px]">
                      {aboutLinks.map((link) => (
                        <ListItem
                          key={link.title}
                          title={link.title}
                          href={link.href}
                        >
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white cursor-pointer">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {resources.map((resource) => (
                        <ListItem
                          key={resource.title}
                          title={resource.title}
                          href={resource.href}
                          platform={resource.platform}
                        >
                          {resource.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="bg-transparent text-white">
                  <Button
                    asChild
                    variant="ghost"
                    className="h-9 bg-transparent cursor-pointer"
                  >
                    <Link href="/pricing">Pricing</Link>
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem className="bg-transparent text-white cursor-pointer">
                  <Link href="/privacy">
                    <Button variant="ghost" className="ml-1 h-9 bg-transparent">
                      Privacy
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex gap-2">
            <a
              href="https://github.com/Mail-0/Zero"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group inline-flex h-8 items-center gap-2 rounded-lg bg-black px-2 text-sm text-white transition-colors hover:bg-black/90",
              )}
            >
              <div className="flex items-center text-white">
                <icons.github className="mr-1 size-4 fill-white" />
                <span className="ml-1 lg:hidden">Star</span>
                <span className="ml-1 hidden lg:inline">GitHub</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Star className="relative top-px size-4 fill-gray-400 duration-300 group-hover:fill-yellow-400 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
                <AnimatedNumber
                  value={stars}
                  className="font-medium text-white"
                />
              </div>
            </a>
            <Button
              className="h-8 bg-white text-black hover:bg-white hover:text-black cursor-pointer"
              onClick={() => {
                if (session) {
                  router.push("/mail/inbox");
                } else {
                  toast.promise(
                    signIn.social({
                      provider: "google",
                      callbackURL: `${window.location.origin}/mail`,
                    }),
                    {
                      error: "Login redirect failed",
                    },
                  );
                }
              }}
            >
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Sheet */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="fixed left-4 top-6 z-50"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] sm:w-[400px] dark:bg-[#111111]"
          >
            <SheetHeader className="flex flex-row items-center justify-between">
              <SheetTitle>
                <Link href="/" onClick={() => setOpen(false)}>
                  <Image
                    src="white-icon.svg"
                    alt="Zero Email"
                    className="hidden object-contain dark:block"
                    width={22}
                    height={22}
                  />
                  <Image
                    src="/black-icon.svg"
                    alt="0.email Logo"
                    className="object-contain dark:hidden"
                    width={22}
                    height={22}
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col space-y-3">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="mt-2" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link
                  href="/pricing"
                  className="mt-2"
                  onClick={() => setOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/privacy"
                  className="mt-2"
                  onClick={() => setOpen(false)}
                >
                  Privacy
                </Link>
                {aboutLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="block font-medium"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://cal.com/team/0/chat"
                className="font-medium"
              >
                Contact Us
              </a>
            </div>
            <Separator className="mt-8" />
            <div className="mt-8 flex flex-row items-center justify-center gap-4">
              {resources.map((resource) => {
                const Icon = icons[resource.platform];
                return (
                  <Link
                    key={resource.title}
                    href={resource.href}
                    className="flex items-center gap-2 font-medium"
                  >
                    {resource.platform && (
                      <Icon className="dark:fill-muted-foreground h-5 w-5" />
                    )}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    platform?: "github" | "twitter" | "linkedin" | "discord";
  }
>(({ className, title, children, platform, ...props }, ref) => {
  const IconComponent = platform ? icons[platform] : null;

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {IconComponent && (
              <IconComponent className="h-4 w-4 dark:fill-white fill-black" />
            )}
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

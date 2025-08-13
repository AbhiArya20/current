"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@current/ui/components/card";
import { createContext, ReactNode, useContext, useState } from "react";
import { icons, coloredIcons } from "@/components/icons/icons";
import { Separator } from "@current/ui/components/separator";
import { Checkbox } from "@current/ui/components/checkbox";
import { Button } from "@current/ui/components/button";
import { Label } from "@current/ui/components/label";
import { Input } from "@current/ui/components/input";
import { signIn } from "@current/auth/auth-client";
import { Loader2, Key } from "lucide-react";
import { cn } from "@current/ui/lib/utils";
import Link from "next/link";

type SignInButtonProps = {
  title: string;
  provider: string;
  callbackURL: string;
};

const socialProviders: SignInButtonProps[] = [
  {
    title: "Sign in with Google",
    provider: "google",
    callbackURL: "/",
  },
  {
    title: "Sign in with Github",
    provider: "github",
    callbackURL: "/",
  },
  {
    title: "Sign in with Twitter",
    provider: "twitter",
    callbackURL: "/",
  },
];

type AuthContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  selectedProvider: string | null;
  setSelectedProvider: (provider: string | null) => void;
};

const AuthContext = createContext<AuthContextType>({
  loading: false,
  setLoading: () => {},
  selectedProvider: null,
  setSelectedProvider: () => {},
});

function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  return (
    <AuthContext.Provider
      value={{ loading, setLoading, selectedProvider, setSelectedProvider }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

function SocialButton({ title, provider, callbackURL }: SignInButtonProps) {
  const { loading, selectedProvider, setLoading, setSelectedProvider } =
    useAuth();

  const Icon =
    socialProviders.length < 4
      ? icons[provider as unknown as keyof typeof icons]
      : coloredIcons[provider as unknown as keyof typeof coloredIcons];
  return (
    <Button
      variant="outline"
      className={cn(
        "flex items-center h-12 text-sm bg-muted/50 rounded-xl border-none hover:bg-muted transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed gap-3 group cursor-pointer",
        socialProviders.length < 4
          ? "w-full justify-start"
          : "flex-grow justify-center min-w-12",
      )}
      disabled={loading}
      onClick={async () => {
        await signIn.social(
          {
            provider: provider,
            callbackURL: callbackURL,
          },
          {
            onRequest: () => {
              setLoading(true);
              setSelectedProvider(provider);
            },
            onResponse: () => {
              setLoading(false);
              setSelectedProvider(null);
            },
          },
        );
      }}
    >
      {loading && selectedProvider === provider ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <Icon className="size-4" />
      )}
      {socialProviders.length < 4 && (
        <span className="text-foreground/70 group-hover:text-foreground transition-colors duration-300">
          {title}
        </span>
      )}
    </Button>
  );
}

function SocialButtonList() {
  return (
    <div
      className={cn(
        "w-full gap-2 flex items-center",
        "justify-between flex-wrap",
      )}
    >
      {socialProviders.map((provider) => {
        return (
          <SocialButton
            key={provider.provider}
            title={provider.title}
            provider={provider.provider}
            callbackURL={provider.callbackURL}
          />
        );
      })}
    </div>
  );
}

type SignInCardProps = {
  title?: string;
  description?: string;
  mode?: "sign-in" | "sign-up";
};

export default function SignInCard({
  title,
  description,
  mode = "sign-in",
}: SignInCardProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <AuthProvider>
      <Card className="max-w-sm w-full border-none">
        <CardHeader className="text-center">
          <CardTitle className="text-xl sm:text-2xl font-medium">
            {title}
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm text-muted-foreground/80">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <SocialButtonList />
            <div className="flex items-center gap-2">
              <Separator className="w-auto data-[orientation=horizontal]:w-auto" />{" "}
              OR{" "}
              <Separator className="w-auto data-[orientation=horizontal]:w-auto" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>

              <Input
                id="password"
                type="password"
                placeholder="password"
                autoComplete="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                onClick={() => {
                  setRememberMe(!rememberMe);
                }}
              />
              <Label htmlFor="remember">Remember me</Label>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
              onClick={async () => {
                await signIn.email(
                  {
                    email,
                    password,
                  },
                  {
                    onRequest: () => {
                      setLoading(true);
                    },
                    onResponse: () => {
                      setLoading(false);
                    },
                  },
                );
              }}
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <p> Login </p>
              )}
            </Button>

            <Button
              variant="secondary"
              disabled={loading}
              className="gap-2"
              onClick={async () => {
                // await signIn.passkey({
                //   onRequest: () => {
                //     setLoading(true);
                //   },
                //   onResponse: () => {
                //     setLoading(false);
                //   },
                // });
              }}
            >
              <Key size={16} />
              Sign-in with Passkey
            </Button>
          </div>
        </CardContent>
        <CardFooter className="mt-6">
          <div className="space-y-4 text-center font-medium w-full">
            <p className=" text-xs text-muted-foreground/60 leading-relaxed">
              By continuing you agree to our{" "}
              <Link
                href="/terms"
                className="underline hover:text-blue-400 underline-offset-2"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                href="privacy-policy"
                className="underline hover:text-blue-400 underline-offset-2"
              >
                Privacy Policy.
              </Link>
            </p>
            <p className="text-sm text-muted-foreground">
              {mode === "sign-in" ? (
                <>
                  New to Current?{" "}
                  <Link
                    href="sign-up"
                    className="text-foreground hover:text-blue-400"
                  >
                    Create an account
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <Link
                    href="sign-in"
                    className="text-foreground hover:text-blue-400"
                  >
                    Sign in
                  </Link>
                </>
              )}
            </p>
          </div>
        </CardFooter>
      </Card>
    </AuthProvider>
  );
}

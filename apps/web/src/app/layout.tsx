import {
  Geist,
  Geist_Mono,
  Inter,
  Be_Vietnam_Pro,
  Baumans,
} from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import type { Metadata } from "next";
import "@current/ui/globals.css";
import { Toaster } from "sonner";
import { Viewport } from "next";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://current.abhiarya.in"),
  title: {
    default: "Current",
    template: "%s | Current",
    absolute: "Current AI",
  },
  description: "",
  openGraph: {
    url: "https://current.abhiarya.in",
    siteName: "Current",
  },
  keywords: ["current.ai"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9F9F9" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  preload: true,
  weight: "variable",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
  preload: true,
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const baumans = Baumans({
  subsets: ["latin"],
  variable: "--font-baumans",
  preload: true,
  display: "swap",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${beVietnamPro.variable} ${baumans.variable}  ${geistSans.variable} ${geistMono.variable} ${inter.variable} font-sans antialiased`}
      >
        <NuqsAdapter>
          <Providers>
            <Toaster position="top-center" />
            {children}
          </Providers>
        </NuqsAdapter>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

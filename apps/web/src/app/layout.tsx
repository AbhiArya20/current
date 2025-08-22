import { Providers } from "@/components/providers/providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "@current/ui/globals.css";
import { Toaster } from "sonner";
import { Viewport } from "next";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://current.abhiarya.in"),
  title: {
    default: "Current",
    template: "%s | Current",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${inter.variable} font-sans antialiased`}
      >
        <NuqsAdapter>
          <Providers>
            {children}
            <Toaster position="top-center" />
          </Providers>
        </NuqsAdapter>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

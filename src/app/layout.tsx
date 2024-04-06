import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casa21",
  description: "A brazilian hackerspace powered by VinteUm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx('antialiased dark h-full')}
    >
      <body className={clsx('flex min-h-full', inter.className)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

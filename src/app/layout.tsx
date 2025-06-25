import "./globals.css";

import Header from "@/components/Header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conhecendo a Supernova ENT",
  description: "Conheça a maior gravadora independente do Brasil",
  openGraph: {
    images: [
      {
        url: "/LOGO_SUPERNOVA__WHITE-1024x358.png",
        width: 1024,
        height: 358,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

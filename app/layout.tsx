import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Providers from "./providers";
import { NavbarSection } from "./components/ui/Navbar";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata: Metadata = {
  title: "Leul Mesfin",
  description: "Leul Mesfin | Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="dark text-foreground bg-background min-h-screen flex flex-col items-center justify-center">
          {/* <NavbarSection /> */}
          <Providers>{children}</Providers>
          <Analytics />
        </main>
      </body>
    </html>
  );
}

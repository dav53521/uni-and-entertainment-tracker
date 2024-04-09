import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "./header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uni And Entertainment Tracker/Helper",
  description: "A tracker for both uni and also entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <SiteHeader />
     <main>{children}</main>
     </>
  );
}

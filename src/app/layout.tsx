import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./header/header";
import SiteFooter from "./footer/footer"
import "@fontsource/inter"

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
      <html>
          <body>
            <main>
                <div className="flex flex-col h-dvh">
                    <>
                        <SiteHeader />
                             <main>{children}</main>
                        <SiteFooter />
                     </>
                </div>
            </main>
          </body>
      </html>
  );
}

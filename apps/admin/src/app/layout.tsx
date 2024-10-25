import "~/styles/globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { cn } from "~/lib/utils";
import Providers from "~/providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Zeecom",
  description: "Developed by Muhammad Isa",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(poppins.className)}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

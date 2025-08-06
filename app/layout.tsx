import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactQueryProvider from "../lib/providers/ReactQueryProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

export const metadata: Metadata = {
  title: "SnowRivals",
  description:
    "AI-powered tool for skiers and snowboarders that analyzes tricks, offers improvement feedback and aligns with competition judging criteria to help athletes achieve higher scores",
  icons: {
    icon: basePath + "/favicon.ico",
    shortcut: basePath + "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <main>{children}</main>
          <ReactQueryDevtools initialIsOpen={false} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}

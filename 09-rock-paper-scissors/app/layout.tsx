import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rock, Paper, Scissors",
  description: "Example Next.js 13 app that is a Rock, Paper, Scissors game.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}

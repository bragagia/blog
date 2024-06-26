import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mathias Bragagia's Blog",
  description: "Hello there :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="cormorant">{children}</body>
    </html>
  );
}

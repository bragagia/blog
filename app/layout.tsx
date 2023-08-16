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
      <body className={"cormorant"}>
        <div className="container mx-auto px-6 md:px-12 p-2 my-12">
          {children}
        </div>
      </body>
    </html>
  );
}

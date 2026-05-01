import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ouassila - Portfolio",
  description:
    "Portfolio van Ouassila, gericht op front-end development en design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

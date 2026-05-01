import "./globals.css";
import type { Metadata } from "next";
import { roboto, anton } from "./fonts";

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
    <html lang="nl">
      <body className={`${roboto.variable} ${anton.variable}`}>{children}</body>
    </html>
  );
}

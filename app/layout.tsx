import "./globals.css";
import type { Metadata } from "next";
import { roboto, anton } from "./fonts";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
      <body className={`${roboto.variable} ${anton.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata, Viewport } from "next";
import { roboto, anton } from "./fonts";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ouassila - Portfolio",
  description:
    "Portfolio van Ouassila, gericht op front-end development en design.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${roboto.variable} ${anton.variable}`}>
        <div className="flex flex-col justify-between min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

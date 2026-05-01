import { Roboto, Anton } from "next/font/google";

export const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

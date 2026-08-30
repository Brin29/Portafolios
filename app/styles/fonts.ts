import { Archivo_Black, Space_Grotesk, Geist_Mono } from "next/font/google";

export const display = Archivo_Black({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

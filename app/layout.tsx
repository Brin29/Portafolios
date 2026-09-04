import type { Metadata } from "next";
import { display, sans, mono } from "@/app/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breiner Parra - Frontend Developer",
  description:
    "Portfolio of Breiner Parra, a frontend developer working with React.js and Next.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

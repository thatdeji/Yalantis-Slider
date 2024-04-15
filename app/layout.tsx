// "use client";
import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "$/lib/registry";
import { montserrat } from "./font";

export const metadata: Metadata = {
  title: "Yalantis Slider",
  description: "Creative exploration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Nav from "@/components/Nav";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Jaimie Chun",
  description: "Product designer who engineers. Building thoughtful digital experiences.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistMono.variable} ${GeistSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <CustomCursor />
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
      </body>
    </html>
  );
}

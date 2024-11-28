import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./global.css";

export const metadata: Metadata = {
  title: "Diathrive Health",
  description: "Lower costs. Improved health and productivity.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Render
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

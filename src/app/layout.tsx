import type { Metadata } from "next";

import Footer from "@/ui/Footer";
import Header from "@/ui/Header";

import "./global.css";

export const metadata: Metadata = {
  title: "Diathrive Health",
  description: "Lower costs. Improved health and productivity.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Render
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import Footer from "@/ui/Footer";
import Header from "@/ui/Header";

export const metadata: Metadata = {
  title: "Diathrive Health",
  description: "Generated by create next app",
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
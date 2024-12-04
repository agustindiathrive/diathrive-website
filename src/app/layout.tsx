import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';

import Footer from '@/components/layout/footer';
import Header from '@/components/Header';

import './global.css';

const oswald = Oswald({
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  description: 'Lower costs. Improved health and productivity.',
  title: 'Diathrive Health',
};

export default function RootLayout({ children, modal }: Readonly<{ children: React.ReactNode, modal: React.ReactNode }>) {
  // Render
  return (
    <html className={oswald.className} lang="en">
      <body>
        <Header />
        {children}
        {modal}
        <div id="modal-root" />
        <Footer />
      </body>
    </html>
  );
}

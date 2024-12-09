import Image from 'next/image';
import Link from 'next/link';

import HeaderTextLink from '@/components/layout/header-text-link';
import LinkButton from '@/components/ui/link-button';

export default function Header() {
  // Render
  return (
    <header className="flex justify-around py-6">
      <Link href="/">
        <Image
          alt="Diathrive logo"
          height={80}
          priority
          src="/images/DiathriveLogo.webp"
          width={220}
        />
      </Link>
      <nav className="flex items-center">
        <ul className="flex">
          <HeaderTextLink href="/approach" text="Our Approach" />
          <HeaderTextLink href="/resources" text="Resources" />
          <HeaderTextLink href="/about" text="About" />
          <li className="mx-3">
            <LinkButton bgColor="#242678" href="/request-a-demo" label="Request A Demo" text="Request A Demo" />
          </li>
          <li className="mx-3">
            <LinkButton bgColor="#00a5e3" href="/download" label="Download" text="Download" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

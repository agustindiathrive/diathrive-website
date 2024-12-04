import Image from 'next/image';
import Link from 'next/link';

import ButtonLink from '@/components/ButtonLink';
import HeaderTextLink from '@/components/HeaderTextLink';

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
          <li className="mx-3"><ButtonLink color="bg-dark-blue" href="/request-a-demo" text="Request A Demo" /></li>
          <li className="mx-3"><ButtonLink color="bg-light-blue" href="/download" text="Download" /></li>
        </ul>
      </nav>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";

import ButtonLink from "@/ui/ButtonLink";
import HeaderTextLink from "@/ui/HeaderTextLink";

export default function Header() {
  // Render
  return (
    <header className="flex justify-around py-6">
      <Link href="/">
        <Image
          alt="Diathrive logo"
          height={80}
          priority
          src="/diathrive-logo.webp"
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

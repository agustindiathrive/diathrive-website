import Image from "next/image";
import Link from "next/link";

export default function Header() {
  // Render
  return (
    <header className="flex flex-row justify-around">
      <Link href="/">
        <Image
          alt="Diathrive logo"
          height={80}
          objectFit="contain"
          priority
          src="/diathrive-logo.webp"
          width={220}
        />
      </Link>
      <nav>
        <ul className="flex flex-row gap-8">
          <li>
            <Link href="/approach">Our Approach</Link>
          </li>
          <li>
            <Link href="/resources">Resources</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/request-a-demo">Request A Demo</Link>
          </li>
          <li>
            <Link href="/download">Download</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
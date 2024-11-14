import Link from "next/link";

export default function Header() {
  // Render
  return (
    <header>
      <nav>
        <ul>
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
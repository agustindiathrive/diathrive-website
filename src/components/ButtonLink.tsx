import Link from 'next/link';

type ButtonLinkProps = {
  color: string;
  href: string;
  text: string;
};

export default function ButtonLink({ color, href, text }: ButtonLinkProps) {
  // Render
  return (
    <Link className={`${color} font-medium leading-10 px-5 py-3 rounded-3xl text-lg hover:opacity-50 hover:transition all`} href={href} prefetch style={{ color: 'white' }}>{text}</Link>
  );
}
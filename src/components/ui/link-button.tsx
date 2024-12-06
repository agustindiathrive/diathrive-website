import Link from 'next/link';

type ButtonLinkProps = {
  bgColor?: string;
  href: string;
  text: string;
  textColor?: string;
};

export default function LinkButton({ bgColor = '#00a5e3', href, text, textColor = 'white' }: ButtonLinkProps) {
  // Render
  return (
    <Link
      className="font-medium leading-10 px-5 py-3 rounded-3xl text-lg hover:opacity-50 hover:transition all"
      href={href}
      prefetch
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {text}
    </Link>
  );
}
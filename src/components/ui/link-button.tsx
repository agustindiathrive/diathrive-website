import Link from 'next/link';

type ButtonLinkProps = {
  bgColor?: string;
  href: string;
  label: string;
  text: string;
  textColor?: string;
};

export default function LinkButton({ bgColor = '#00a5e3', href, label, text, textColor = 'white' }: ButtonLinkProps) {
  // Render
  return (
    <Link
      aria-label={label}
      className="font-medium leading-10 px-5 py-3 rounded-3xl text-lg hover:opacity-50 hover:transition all"
      href={href}
      prefetch
      style={{ backgroundColor: bgColor, color: textColor }}
      title={label}
    >
      {text}
    </Link>
  );
}
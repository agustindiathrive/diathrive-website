import Link from "next/link";

type HeaderTextLinkProps = {
  href: string;
  text: string;
};

export default function HeaderTextLink({ href, text }: HeaderTextLinkProps) {
  // Render
  return (
    <li>
      <Link className="font-medium leading-10 px-6 text-dark-blue text-lg hover:text-light-blue hover:transition all" href={href}>{text}</Link>
    </li>
  );
}
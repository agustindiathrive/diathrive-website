import Link from "next/link";

type TextNavigationLinkProps = {
  href: string;
  text: string;
  textColor?: string;
  textHoverColor?: string;
};

export default function TextNavigationLink({ href, text, textColor = '#FFFFFF', textHoverColor = 'light-blue' }: TextNavigationLinkProps): JSX.Element {
  // Render
  return <Link className="text-lg hover:text-light-blue hover:transition all" href={href} style={{ color: textColor }}>{text}</Link>;
}
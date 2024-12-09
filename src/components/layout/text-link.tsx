type TextLinkProps = {
  children: React.ReactNode;
  href: string;
  label: string;
};

export default function TextLink({ children, href, label }: TextLinkProps) {
  // Render
  return (
    <a aria-label={label} className="hover:text-light-blue hover:transition all" href={href} target="_blank">{children}</a>
  );
}

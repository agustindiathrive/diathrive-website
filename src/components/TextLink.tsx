type TextLinkProps = {
  children: React.ReactNode;
  href: string;
};

export default function TextLink({ href, children }: TextLinkProps): JSX.Element {
  // Render
  return (
    <a className="hover:text-light-blue hover:transition all" href={href} target="_blank">{children}</a>
  );
}

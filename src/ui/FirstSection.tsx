import Image from "next/image";

type FirstSectionProps = {
  backgroundImageURL: string;
  buttonTarget?: string;
  text?: string;
  title: string;
  underlinedTitle: string;
};

export default function FirstSection({ backgroundImageURL, buttonTarget, text, title, underlinedTitle }: FirstSectionProps) {
  // Render
  return (
    <Image
      alt={`${title} ${underlinedTitle}`}
      priority
      src={backgroundImageURL}
    />
  );
}

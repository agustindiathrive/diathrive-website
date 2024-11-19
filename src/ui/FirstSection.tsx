import Image from "next/image";

import ButtonLink from "@/ui/ButtonLink";

type FirstSectionProps = {
  backgroundImageURL: string;
  showButton?: boolean;
  text?: string;
  title: string;
  underlinedTitle: string;
};

export default function FirstSection({ backgroundImageURL, showButton = false, text, title, underlinedTitle }: FirstSectionProps) {
  // Render
  return (
    <section>
      <Image
        alt={`${title} ${underlinedTitle}`}
        className="absolute -z-10"
        height={493}
        priority
        src={backgroundImageURL}
        width={1728}
      />
      <div className="px-60 pt-20" style={{ height: 493 }}>
        <h2 className="text-5xl font-normal pb-2" style={{ color: 'white' }}>{title}</h2>
        <h2 className="text-5xl font-normal pb-2" style={{ color: 'white' }}><span style={{ borderBottomColor: '#00a5e3', borderBottomWidth: 5}}>{underlinedTitle}</span></h2>
        <p className="pb-12 pt-6 w-1/2" style={{ color: 'white' }}>{text}</p>
        {showButton && <ButtonLink color="bg-light-blue" href="/request-a-demo" text="Request A Demo" />}
      </div>
    </section>
  );
}

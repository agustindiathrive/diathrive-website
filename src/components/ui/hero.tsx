import Image from 'next/image';

import ButtonLink from '@/components/ButtonLink';

type HeroProps = {
  backgroundImageURL: string;
  showButton?: boolean;
  text?: string;
  title: string;
  underlinedTitle: string;
};

export default function Hero({ backgroundImageURL, showButton = false, text, title, underlinedTitle }: HeroProps): JSX.Element {
  // Render
  return (
    <section className="flex flex-col h-[493px] items-center justify-center relative w-full">
      <div className="flex flex-col max-w-[1320px]">
        <h2 className="font-normal leading-[60px] text-[51px]" style={{ color: 'white' }}>
          {title}
        </h2>
        <h2 className="font-normal leading-[60px] text-[51px]" style={{ color: 'white' }}>
          <span className="border-b-light-blue border-b-[5px]">{underlinedTitle}</span>
        </h2>
      </div>
      {text && <p className="pb-12 pt-6 w-1/2" style={{ color: 'white' }}>{text}</p>}
      {showButton && <ButtonLink color="bg-light-blue" href="/request-a-demo" text="Request A Demo" />}
      <Image
        alt={`${title} ${underlinedTitle}`}
        className="object-cover -z-10"
        fill
        priority
        src={backgroundImageURL}
      />
    </section>
  );
}

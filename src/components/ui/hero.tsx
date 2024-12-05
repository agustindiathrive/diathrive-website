import Image from 'next/image';

import LinkButton from '@/components/ui/link-button';

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
      <div className="flex flex-col max-w-[1320px] mx-auto">
        <h2 className="font-normal leading-[60px] text-[51px]" style={{ color: 'white' }}>
          {title}
          <br />
          <span className="border-b-light-blue border-b-[5px]">{underlinedTitle}</span>
        </h2>
        {text && <p className="font-medium leading-[25px] pt-[30px] text-[16px] w-1/2" style={{ color: 'white' }}>{text}</p>}
        {showButton && <LinkButton bgColor="light-blue" href="/request-a-demo" text="Request A Demo" />}
      </div>
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

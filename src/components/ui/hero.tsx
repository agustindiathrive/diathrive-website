import Image from 'next/image';

import LinkButton from '@/components/ui/link-button';

type HeroProps = {
  backgroundImageURL: string;
  showButton?: boolean;
  text?: string;
  title: string;
  underlinedTitle: string;
};

export default function Hero({ backgroundImageURL, showButton = false, text, title, underlinedTitle }: HeroProps) {
  // Render
  return (
    <section className="flex flex-col justify-center h-[493px] relative w-full">
      <div className="flex flex-col pl-[10%]">
        <h2 className="font-normal leading-[60px] text-[51px]" style={{ color: 'white' }}>
          {title}
          <br />
          <span className="border-b-light-blue border-b-[5px]">{underlinedTitle}</span>
        </h2>
        {text && <p className="font-medium leading-[25px] pt-[30px] text-[16px] w-1/2" style={{ color: 'white' }}>{text}</p>}
        {showButton && (
          <div className="mt-[50px]">
            <LinkButton bgColor="#00a5e3" href="/request-a-demo" label="Request A Demo" text="Request A Demo" />
          </div>
        )}
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

import Image from 'next/image';

import ButtonLink from '@/components/ButtonLink';

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
    <section className="flex justify-center relative">
      <div className="max-w-[1320px] py-12">
        <h2 className="font-normal mb-12 text-[51px]" style={{ color: 'white' }}>
          {title}
          <br />
          <span style={{ borderBottomColor: '#00a5e3', borderBottomWidth: 5 }}>{underlinedTitle}</span>
        </h2>
        <p className="pb-12 pt-6 w-1/2" style={{ color: 'white' }}>{text}</p>
        {showButton && <ButtonLink color="bg-light-blue" href="/request-a-demo" text="Request A Demo" />}
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

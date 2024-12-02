import Image from 'next/image';

import ButtonLink from '@/components/ButtonLink';

export default function BottomBanner(): JSX.Element {
  // Render
  return (
    <section className="flex justify-center relative">
      <div className="max-w-[1320px] pb-[120px] pt-[230px] text-center">
        <h2 className="font-normal mb-12 text-[51px]" style={{ color: 'white' }}>Ready to experience positive change with Diathrive Health?</h2>
        <ButtonLink color="bg-light-blue" href="/request-a-demo" text="Request A Demo" />
      </div>
      <Image
        alt="Ready to experience positive change with Diathrive Health?"
        className="object-cover -z-10"
        fill
        priority
        src="/images/bottom-banner-bg.webp"
      />
    </section>
  );
}

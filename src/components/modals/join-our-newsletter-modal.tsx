import Image from 'next/image';

import JoinOurNewsletterForm from '@/components/layout/newsletter/join-our-newsletter-form';

export default function JoinOurNewsletterModal(): JSX.Element {
  // Render
  return (
    <main className="w-[760px]">
      <section className="flex flex-col font-oswald items-center py-8 text-dark-blue">
        <Image
          alt="Diathrive Health logo"
          height={86}
          priority
          src="/images/DiathriveLogo.webp"
          width={337}
        />
        <h1 className="leading-[77px] py-4 text-7xl">JOIN OUR NEWSLETTER</h1>
        <h2 className="leading-[45px] text-4xl">For industry news and Diathrive Health updates</h2>
      </section>
      <section className="bg-light-blue flex flex-col items-center gap-3">
        <h3 className="font-oswald leading-[26px] py-2 text-base" style={{ color: 'white' }}>ENTER YOUR EMAIL ADDRESS TO SIGN UP TODAY</h3>
        <JoinOurNewsletterForm />
      </section>
    </main>
  );
}
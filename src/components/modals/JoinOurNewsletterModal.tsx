import Image from "next/image";

export default function JoinOurNewsletterModal(): JSX.Element {
  // Render
  return (
    <main>
      <section className="flex flex-col font-oswald items-center text-dark-blue">
        <Image
          alt="Diathrive Health logo"
          height={86}
          priority
          src="/images/DiathriveLogo.webp"
          width={337}
        />
        <p className="leading-[77px] text-7xl">JOIN OUR NEWSLETTER</p>
        <p className="leading-[45px] text-4xl">For industry news and Diathrive Health updates</p>
      </section>
      <section className="bg-light-blue flex flex-col items-center gap-3">
        <p className="font-oswald leading-[26px] text-base" style={{ color: 'white' }}>ENTER YOUR EMAIL ADDRESS TO SIGN UP TODAY</p>
        <form className="flex flex-col gap-3">
          <input className="border-none h-[49px] leading-[19px] outline-none px-3.5 text-[19px] text-black" />
          <input className="border-none h-[49px] leading-[19px] outline-none px-3.5 text-[19px] text-black" />
          <input className="border-none h-[49px] leading-[19px] outline-none px-3.5 text-[19px] text-black" />
          <input className="border-none h-[49px] leading-[19px] outline-none px-3.5 text-[19px] text-black" />
        </form>
      </section>
    </main>
  );
}
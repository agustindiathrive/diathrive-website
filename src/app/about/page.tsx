import Image from 'next/image';

import BottomBanner from '@/components/BottomBanner';
import Hero from '@/components/ui/hero';
import LinkButton from '@/components/ui/link-button';

export default function AboutPage() {
  // Render
  return (
    <main>
      <Hero
        backgroundImageURL="/images/HeroBG1.webp"
        text="A holistic approach means addressing the needs of the whole person. Our diabetes management platform responds to the exact needs of members, factors in psychological and social determinants of health, builds sustainable behavioral change, and drastically decreases your healthcare costs."
        title="A better solution"
        underlinedTitle="for everyone."
      />
      <section className="flex flex-row max-w-[1320px] mx-auto py-[110px] w-full">
        <div className="pr-[6%] w-1/2">
          <h3 className="font-medium leading-[52px] mb-2 pb-[20px] text-[38px] text-dark-blue">Our experiential approach creates benefits for all.</h3>
          <p className="font-medium leading-[25px] max-w-[750px] mb-4 text-[16px]">Diathrive Health delivers a more effective, accessible, and engaging way to manage diabetes. By improving the quality of care and removing inefficiencies, middlemen, and waste—we can deliver more positive results for individuals and employers.</p>
          <LinkButton href="/request-a-demo" text="Learn More" />
        </div>
        <div className="flex flex-row justify-center w-1/2">
          <iframe allowFullScreen height="315" src="https://player.vimeo.com/video/605850561?h=9de70b831a" width="560" ></iframe>
        </div>
      </section>
      <section className="flex flex-col h-[560px] items-center justify-center py-[80px] relative w-full">
        <div className="flex flex-row max-w-[1320px] mx-auto">
          <div className="pr-[18%] w-2/3">
            <h3 className="font-medium pb-[20px] text-[38px]" style={{ color: 'white' }}>Our Story</h3>
            <p className="font-medium leading-[30px] mb-4 pb-[10px] text-[16px]" style={{ color: 'white' }}>
              Diathrive Health was founded in 2017 to revolutionize healthcare with simple, affordable high-quality solutions that actually work. Our solutions are based on real science and actual data. We address the psychosocial and social barriers to success for people living with chronic conditions like diabetes. We are focused on delivering immediate, tangible ROI.
            </p>
            <p className="font-medium leading-[30px] mb-4 pb-[10px] text-[16px]" style={{ color: 'white' }}>
              Chronic conditions are complicated and living with diabetes is already complex—yet so many care providers wind up adding more to these burdens. At Diathrive Health, we trade those frustrations for management strategies that are straightforward, affordable, and effective. We put quality of care first, and that makes all the difference.
            </p>
          </div>
          <div className="w-1/3">
            <Image
              alt="CEO"
              height={386}
              priority
              src="/images/CEOAbout.webp"
              width={333}
            />
            <h2 className="font-medium leading-[34px] pb-[20px] pt-[40px] text-[25px]" style={{ color: 'white' }}>&quot;Complexity is not the answer.&quot;</h2>
            <span className="font-medium text-light-blue text-[16px]">Michael Hennessy, Chief Executive Officer</span>
          </div>
        </div>
        <Image
          alt="Grid Background"
          className="object-cover -z-10"
          fill
          priority
          src="/images/GridBG.webp"
        />
      </section>
      <section className="py-[110px]">
        <div className="flex flex-row max-w-[1320px] mx-auto w-full">
          <div className="w-1/3">
            <Image
              alt="Removing barriers is essential to keeping people engaged."
              className="absolute left-[125px] -mt-[220px]"
              height={544}
              priority
              src="/images/RemovingBarriersIsEssentialToKeepingPeopleEngaged.webp"
              width={628}
            />
          </div>
          <div className="pl-[5%] w-2/3">
            <h3 className="font-medium leading-[52px] pb-[20px] text-[38px] text-dark-blue">
              Removing barriers is essential<br />
              to keeping people engaged.
            </h3>
            <p className="font-medium leading-[25px] max-w-[750px] mb-4 text-[16px]">
              Even the best laid care plans can’t deliver results when they’re up against the full gamut of health hurdles and behavioral challenges that people experience.
            </p>
            <p className="font-medium leading-[25px] max-w-[750px] mb-4 text-[16px]">
              Working with experts at the Behavioral Diabetes Institute, Diathrive Health offers a methodology that identifies individual barriers so people can stay focused on achieving their goals. We offer personalized coaching and care plans that tackle obstacles and create lasting behavioral change.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-light-blue py-[54px]">
        <div className="flex flex-row max-w-[1320px] mx-auto w-full">
          <div className="w-[43%]">
            <h3 className="font-medium leading-[48px] text-[38px]" style={{ color: 'white' }}>We are listeners, overhaulers, and doers.</h3>
            <p className="font-medium leading-[25px] mb-[20px] mt-[10px] text-[16px]" style={{ color: 'white' }}>There are over 37 million Americans dealing with diabetes, so there is no time for stagnation and status quo. Our leaders drive change — so your organization can benefit from sweeping change.</p>
            <LinkButton bgColor="white" href="/request-a-demo" text="Learn More" textColor="#242678" />
          </div>
          <Image
            alt="We are listeners, overhaulers, and doers."
            className="absolute right-[17%] -mt-[135px]"
            src="/images/WeAreListenersOverhaulersAndDoers.webp"
            priority
            height={485}
            width={420}
          />
        </div>
      </section>
      <BottomBanner />
    </main>
  );
}
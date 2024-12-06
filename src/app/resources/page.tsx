import BottomBanner from '@/components/BottomBanner';
import Hero from '@/components/ui/hero';

import Articles from '@/components/articles';
import Image from 'next/image';
import LinkButton from '@/components/ui/link-button';

export default function ResourcesPage() {
  // Render
  return (
    <main>
      <Hero backgroundImageURL="/images/HeroBG1.webp" title="When employees thrive," underlinedTitle="business does too." />
      <section className="py-[50px]">
        <div className="flex flex-row justify-center max-w-[1320px] mx-auto">
          <p className="font-medium leading-[25px] max-w-[63%] text-[16px] text-center">Do your best for them, and they will do their best for you. Here, we share tips and information to help you show up better for the people who propel your business forward. Helping your employees proactively manage diabetes creates a healthier future for all of us.</p>
        </div>
      </section>
      <section className="bg-light-blue py-[80px]">
        <div className="flex flex-row gap-3 max-w-[1320px] mx-auto">
          <Image
            alt="How To Talk About Diabetes"
            height={500}
            priority
            src="/articles/HowToTalkAboutDiabetes.webp"
            width={500}
          />
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-row gap-28">
              <Image
                alt="The Insurtech Leadership Podcast: Diathrive Health CEO Michael Hennessy"
                height={240}
                priority
                src="/articles/InsurtechLeadershipPodcastDiathriveHealthCeoMichaelHennessy.webp"
                width={240}
              />
              <div className="flex flex-col justify-center">
                <h5 className="font-medium leading-[28px] py-[22px] text-[21px] w-[288px]" style={{ color: 'white' }}>The Insurtech Leadership Podcast: Diathrive Health CEO Michael Hennessy</h5>
                <div>
                  <LinkButton
                    bgColor="white"
                    href="/article/insurtech-leadership-podcast-diathrive-health-ceo-michael-hennessy"
                    text="Read More"
                    textColor="#242678"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-28">
              <Image
                alt="The Insurtech Leadership Podcast: Diathrive Health CEO Michael Hennessy"
                height={240}
                priority
                src="/articles/WhatPeopleDiabetesNeedEmployer.webp"
                width={240}
              />
              <div className="flex flex-col justify-center">
                <h5 className="font-medium leading-[28px] py-[22px] text-[21px] w-[288px]" style={{ color: 'white' }}>What People with Diabetes Need From an Employer</h5>
                <div>
                  <LinkButton
                    bgColor="white"
                    href="/article/what-people-diabetes-need-employer"
                    text="Read More"
                    textColor="#242678"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Articles />
      <BottomBanner />
    </main>
  );
}
import Image from 'next/image';
import LinkButton from '@/components/ui/link-button';

export default function Resources() {
  // Render
  return (
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
              <h3 className="font-medium leading-[28px] py-[22px] text-[21px] w-[288px]" style={{ color: 'white' }}>The Insurtech Leadership Podcast: Diathrive Health CEO Michael Hennessy</h3>
              <div>
                <LinkButton
                  bgColor="white"
                  href="/article/insurtech-leadership-podcast-diathrive-health-ceo-michael-hennessy"
                  label="The Insurtech Leadership Podcast: Diathrive Health CEO Michael Hennessy"
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
              <h3 className="font-medium leading-[28px] py-[22px] text-[21px] w-[288px]" style={{ color: 'white' }}>What People with Diabetes Need From an Employer</h3>
              <div>
                <LinkButton
                  bgColor="white"
                  href="/article/what-people-diabetes-need-employer"
                  label="What People with Diabetes Need From an Employer"
                  text="Read More"
                  textColor="#242678"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
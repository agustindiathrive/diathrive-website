import Image from 'next/image';

import BottomBanner from '@/components/ui/bottom-banner';
import Hero from '@/components/ui/hero';
import LinkButton from '@/components/ui/link-button';

export default function ApproachPage() {
  // Render
  return (
    <main>
      <Hero
        backgroundImageURL="/images/HeroBG2.webp"
        showButton
        text="A holistic approach means addressing the needs of the whole person. Our diabetes management platform responds to the exact needs of your employees, factors in psychological and social determinants of health, builds long-term motivation, and sparks a measurable decrease in your health costs."
        title="Your employees deserve"
        underlinedTitle="to thrive"
      />
      <section className="py-[100px]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-row flex-wrap">
            <div className="flex flex-row items-start pb-[40px] w-1/2">
              <div className="flex flex-row justify-end pr-6 w-1/4">
                <Image
                  alt="Better Value"
                  height={141}
                  src="/images/BetterValue.svg"
                  priority
                  width={141}
                />
              </div>
              <aside className="flex flex-col mr-4 w-3/4">
                <h5 className="font-medium text-dark-blue text-[21px]">Better Value</h5>
                <p className="font-medium leading-[25px] text-[16px]">You stand to benefit now—and years from now. Our compounding approach to long-term value generates between 60-85% in immediate savings on supplies alone—while simultaneously generating new momentum that goes the distance. With the right resources in place, these tools take on new life and drive further savings as engaged employees continue using them.</p>
              </aside>
            </div>
            <div className="flex flex-row items-start pb-[40px] w-1/2">
              <div className="flex flex-row justify-end pr-6 w-1/4">
                <Image
                  alt="Better Quality"
                  height={118}
                  src="/images/BetterQuality.svg"
                  priority
                  width={109}
                />
              </div>
              <aside className="flex flex-col mr-4 w-3/4">
                <h5 className="font-medium text-dark-blue text-[21px]">Better Quality</h5>
                <p className="font-medium leading-[25px] text-[16px]">Provide your employees with the highest quality glucose meter and most advanced test strip technology on the market.</p>
              </aside>
            </div>
            <div className="flex flex-row items-start pb-[40px] w-1/2">
              <div className="flex flex-row justify-end pr-6 w-1/4">
                <Image
                  alt="Better Outcomes"
                  height={110}
                  src="/images/BetterOutcomes.svg"
                  priority
                  width={129}
                />
              </div>
              <aside className="flex flex-col mr-4 w-3/4">
                <h5 className="font-medium text-dark-blue text-[21px]">Better Outcomes</h5>
                <p className="font-medium leading-[25px] text-[16px]">Our Health Advisors go far beyond the typical diet and exercise guidelines. Using psychosocial assessment criteria designed by the Behavioral Diabetes Institute, we emphasize small changes that actively address even the biggest barriers to health management.</p>
              </aside>
            </div>
            <div className="flex flex-row items-start pb-[40px] w-1/2">
              <div className="flex flex-row justify-end pr-6 w-1/4">
                <Image
                  alt="Better Employee Engagement"
                  height={147}
                  src="/images/BetterEmployeeEngagement.svg"
                  priority
                  width={103}
                />
              </div>
              <aside className="flex flex-col mr-4 w-3/4">
                <h5 className="font-medium text-dark-blue text-[21px]">Better Employee Engagement</h5>
                <p className="font-medium leading-[25px] text-[16px]">So many digital health platforms are better at interrupting lives than fitting into them, but Diathrive Health stands apart. We deliver personalized experiences that consider how real people navigate change. We meet individuals wherever they are and support them with human-powered guidance that empowers them with a refreshing level of access.</p>
              </aside>
            </div>
            <div className="flex flex-row items-start pb-[40px] w-1/2">
              <div className="flex flex-row justify-end pr-6 w-1/4">
                <Image
                  alt="Better Guidance"
                  height={76}
                  src="/images/BetterGuidance.svg"
                  priority
                  width={133}
                />
              </div>
              <aside className="flex flex-col mr-4 w-3/4">
                <h5 className="font-medium text-dark-blue text-[21px]">Better Guidance</h5>
                <p className="font-medium leading-[25px] text-[16px]">We prioritize people and the way they want to interact. From our clinically trained Health Advisors to guidance from those who have lived it, we power the human side of employee health and support your employees every step of the way.</p>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark-blue pt-[100px]">
        <div className="flex flex-row max-w-[1320px] mx-auto">
          <div className="flex flex-col w-1/2">
            <div className="flex flex-row gap-8 items-start pb-[50px]">
              <Image
                alt="Check Mark"
                height={180}
                priority
                src="/images/CheckMark.svg"
                width={180}
              />
              <aside className="mr-8">
                <h5 className="font-medium text-[21px]" style={{ color: 'white' }}>Holistic Platform</h5>
                <p className="font-medium leading-[25px] text-[16px]" style={{ color: 'white' }}>Our platform empowers both patient and provider with data and coaching to address the full continuum of challenges associated with diabetes.</p>
              </aside>
            </div>
            <div className="flex flex-row gap-8 items-start pb-[50px]">
              <Image
                alt="Check Mark"
                height={180}
                priority
                src="/images/CheckMark.svg"
                width={180}
              />
              <aside className="mr-8">
                <h5 className="font-medium text-[21px]" style={{ color: 'white' }}>Supplies On-Demand</h5>
                <p className="font-medium leading-[25px] text-[16px]" style={{ color: 'white' }}>Personalized plans connect people to the highest quality testing supplies and deliver them directly, at the desired frequency.</p>
              </aside>
            </div>
            <div className="flex flex-row gap-8 items-start pb-[50px]">
              <Image
                alt="Check Mark"
                height={180}
                priority
                src="/images/CheckMark.svg"
                width={180}
              />
              <aside className="mr-8">
                <h5 className="font-medium text-[21px]" style={{ color: 'white' }}>The diabetes management revolution will not be automated.</h5>
                <p className="font-medium leading-[25px] text-[16px]" style={{ color: 'white' }}>No nudges. No chatbots. Just personalized care. Artificial intelligence cannot simulate human empathy—and it has no way of relating to the experience of having diabetes. We understand how deeply chronic disease affects people, and that’s why we take a distinctly human-centric approach.</p>
              </aside>
            </div>
          </div>
          <div className="pl-8 w-1/2">
            <Image
              alt="Diathrive Mobile App"
              height={642}
              priority
              src="/images/DiathriveMobileApp.webp"
              width={449}
            />
          </div>
        </div>
      </section>
      <section className="py-[140px]">
        <div className="max-w-[1320px] mx-auto relative w-full">
          <div className="absolute left-0 -top-40 w-[60%]">
            <Image
              alt="It’s time to put barriers in the rearview mirror."
              className="align-middle max-w-[60%]"
              height={532}
              priority
              src="/images/ItsTimeToPutBarriersInTheRearviewMirror.webp"
              width={461}
            />
          </div>
          <div className="pl-[32%]">
            <h4 className="font-semibold leading-[43px] mb-2 pb-[20px] text-dark-blue text-[32px]">It’s time to put barriers in the rearview mirror.</h4>
            <p className="font-medium leading-[25px] mb-4 text-[16px]">
              Even the best laid care plans can’t deliver results when they’re up against the full gamut of health hurdles and behavioral challenges people experience. By leveraging the expertise of the Behavioral Diabetes Institute, Diathrive Health can quickly identify a person’s unique barriers so that we can customize a care plan to counteract them. Everything we do works to create lasting change.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-light-blue py-[60px]">
        <div className="flex flex-row max-w-[1320px] mx-auto relative w-full">
          <Image
            alt="NPS Score"
            height={644}
            priority
            src="/images/NPSScoreWhite.webp"
            width={618}
          />
          <div className="align-middle font-medium leading-[31px] mx-32 pb-[10px] text-[22px]" style={{ color: 'white' }}>
            <p>Diathrive Health is more than a vendor to MotivHealth. They are a strategic partner that recognized our concerns, needs, and goals. Diathrive Health demonstrated an incredible level of dedication and innovation throughout the implementation process. Their high-quality products and their expertise had a tremendous impact in lowering healthcare cost 85% which allowed us to provide significant savings for our employer groups and our members. While covering testing supplies 100%. We appreciate Diathrive Health’s enthusiasm in their continuous effort with MotivHealth to change the healthcare world for the better!!!</p>
            <span className="font-semibold pt-[10px] text-dark-blue text-[16px]">Kim Huynh, MotivHealth</span>
          </div>
        </div>
      </section>
      <section className="py-[80px]">
        <h2 className="font-medium pb-[50px] text-center text-dark-blue text-[38px]">Resources</h2>
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
                <h5 className="font-medium leading-[28px] py-[22px] text-light-blue text-[21px] w-[288px]">The Insurtech Leadership Podcast: Diathrive Health CEO Michael Hennessy</h5>
                <div>
                  <LinkButton
                    bgColor="#242678"
                    href="/article/insurtech-leadership-podcast-diathrive-health-ceo-michael-hennessy"
                    label="The Insurtech Leadership Podcast: Diathrive Health CEO Michael Hennessy"
                    text="Read More"
                    textColor="white"
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
                <h5 className="font-medium leading-[28px] py-[22px] text-light-blue text-[21px] w-[288px]">What People with Diabetes Need From an Employer</h5>
                <div>
                  <LinkButton
                    bgColor="#242678"
                    href="/article/what-people-diabetes-need-employer"
                    label="What People with Diabetes Need From an Employer"
                    text="Read More"
                    textColor="white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      
      <BottomBanner />
    </main>
  );
}
import Image from 'next/image';

import BottomBanner from '@/components/ui/bottom-banner';
import Hero from '@/components/ui/hero';
import Resources from '@/components/ui/resources';

export default function HomePage() {
  // Render
  return (
    <main>
      <Hero 
      backgroundImageURL="/images/HeroBG1.webp"
      title="Lower costs."
      underlinedTitle="Improved health and productivity."
      showButton
      text="Diathrive Health is leading the charge to make positive progress and improve health and organizational outcomes. Our diabetes management platform actively engages people in order to foster a long-term behavior change that sticks."
      />
      <section className="overflow-hidden py-[110px] relative">
        <div className="flex flex-row items-center max-w-[1320px] mx-auto relative">
          <aside className="px-2 w-8/12">
            <h3 className="font-medium leading-[52px] mb-[.5rem] pb-[20px] text-dark-blue text-[38px]">Changing the way chronic disease is managed</h3>
            <p className="font-medium leading-[25px] max-w-[750px] mb-[1rem] text-[16px]">
              The challenges of living with a chronic disease are complex, and solutions that narrowly address one or two factors are bound to fall flat. These complexities easily extend to employers, who feel the sting of lost productivity, rising costs, and increased absenteeism.
            </p>
            <p className="font-medium leading-[25px] max-w-[750px] mb-[1rem] text-[16px]">
              Diathrive Health is changing that. We remove the complexities, focusing on personalized care that increases productivity and quality of life.
            </p>
          </aside>
          <aside className="absolute right-0 w-4/12">
            <Image
              alt="Changing the way chronic disease is managed"
              height={628}
              priority
              src="/images/ChangingTheWayChronicDiseaseIsManaged.webp"
              width={544}
            />
          </aside>
        </div>
      </section>
      <section className="py-[116px] relative">
        <div className="flex flex-row max-w-[1320px] mx-auto px-1 text-center w-full">
          <aside className="flex flex-col items-center px-4 w-1/4">
            <Image
              alt="Unlimited Diabetes Supplies"
              height={112}
              priority
              src="/images/UnlimitedDiabetesSupplies.webp"
              width={111}
            />
            <h3 className="font-medium py-[20px] text-[21px]" style={{ color: 'white' }}>Unlimited Diabetes Supplies</h3>
            <p className="font-medium leading-[25px] text-[16px]" style={{ color: 'white' }}>With personalized plans, participants have direct access to the highest quality testing supplies at the frequencies they need.</p>
          </aside>
          <aside className="flex flex-col items-center px-4 w-1/4">
            <Image
              alt="Personalized Guidance"
              height={112}
              priority
              src="/images/PersonalizedGuidance.webp"
              width={111}
            />
            <h3 className="font-medium py-[20px] text-[21px]" style={{ color: 'white' }}>Personalized Guidance</h3>
            <p className="font-medium leading-[25px] text-[16px]" style={{ color: 'white' }}>Between our clinically-trained Health Advisors and guidance from people who live with diabetes, our diverse insights power the human side of health.</p>
          </aside>
          <aside className="flex flex-col items-center px-4 w-1/4">
            <Image
              alt="Insightful Data"
              height={112}
              priority
              src="/images/InsightfulData.webp"
              width={111}
            />
            <h3 className="font-medium py-[20px] text-[21px]" style={{ color: 'white' }}>Insightful Data</h3>
            <p className="font-medium leading-[25px] text-[16px]" style={{ color: 'white' }}>Access to the Diathrive Health portal makes it easy to track, manage, and review health data in real-time.</p>
          </aside>
          <aside className="flex flex-col items-center px-4 w-1/4">
            <Image
              alt="Lasting Change"
              height={112}
              priority
              src="/images/LastingChange.webp"
              width={111}
            />
            <h3 className="font-medium py-[20px] text-[21px]" style={{ color: 'white' }}>Lasting Change</h3>
            <p className="font-medium leading-[25px] text-[16px]" style={{ color: 'white' }}>Through our partnership with the Behavioral Diabetes Institute, we identify and address the real barriers, health hurdles, and behavioral challenges to ensure our care plans deliver lasting results.</p>
          </aside>
        </div>
        <Image
          alt="Grid Background"
          className="object-cover -z-10"
          fill
          priority
          src="/images/GridBG.webp"
        />
      </section>
      <section className="py-[80px]">
        <div className="max-w-[1320px] mx-auto">
          <h3 className="font-medium text-dark-blue text-center text-[38px]">Testimonials</h3>
          <div className="flex flex-row items-center pt-[1rem]">
            <aside className="px-1 w-7/12">
              <p className="font-medium leading-[36px] py-[20px] text-dark-blue text-[22px]">&quot;Diathrive Health is more than a vendor to MotivHealth. They are a strategic partner that recognized our concerns, needs, and goals. Diathrive Health demonstrated an incredible level of dedication and innovation throughout the implementation process. Their high-quality products and their expertise had a tremendous impact in lowering healthcare cost 85% which allowed us to provide significant savings for our employer groups and our members, including covering testing supplies 100%. We appreciate Diathrive Health’s enthusiasm in their continuous effort with MotivHealth to change the healthcare world for the better!!!&quot;</p>
              <span className="font-medium text-light-blue text-[16px]">Kim Huynh, Director of Operations, MotivHealth</span>
            </aside>
            <aside className="flex flex-row justify-center px-1 w-5/12">
              <Image
                alt="NPS Score"
                height={454}
                priority
                src="/images/NPSScore.webp"
                width={396}
              />
            </aside>
          </div>
        </div>
      </section>
      <Resources />
      <BottomBanner />
    </main>
  );
}

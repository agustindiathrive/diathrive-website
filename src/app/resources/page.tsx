import Articles from '@/components/articles';
import BottomBanner from '@/components/ui/bottom-banner';
import Hero from '@/components/ui/hero';
import Resources from '@/components/ui/resources';

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
      <Resources />
      <Articles />
      <BottomBanner />
    </main>
  );
}
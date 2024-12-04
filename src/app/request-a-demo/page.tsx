import Hero from '@/components/ui/hero';
import SendMessageForm from '@/components/send-message-form';

export default function RequestADemoPage() {
  // Render
  return (
    <main>
      <Hero
        backgroundImageURL="/images/HeroBG1.webp"
        title="Embracing change starts"
        underlinedTitle="with a first step. Contact Us."
      />
      <section className="max-w-[1320px] mx-auto">
        <h3 className="font-medium pt-[90px] text-dark-blue text-[38px]"><strong>Discover the Diathrive Health difference.</strong></h3>
        <p className="max-w-[63%] mx-auto pt-[70px] text-[16px]">Diathrive Health offers a unique solution that empowers people living with diabetes and saves our partners and clients <strong>50-85%</strong> on diabetes-related spend <strong>year 1</strong>.</p>
        <p className="max-w-[63%] mx-auto pt-[70px] text-[16px]">Find out how our personalized, comprehensive approach to managing diabetes can achieve genuine, lasting results that support the health of your employees while boosting the well-being of your business too.</p>
      </section>
      <SendMessageForm />
    </main>
  );
}
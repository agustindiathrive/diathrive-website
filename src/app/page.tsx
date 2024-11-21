import BottomBanner from "@/ui/BottomBanner";
import FirstSection from "@/ui/Hero";

export default function HomePage() {
  // Render
  return (
    <main>
      <FirstSection
        backgroundImageURL="/FirstSectionBG1.webp"
        showButton
        text="Diathrive Health is leading the charge to make positive progress and improve health and organizational outcomes. Our diabetes management platform actively engages people in order to foster a long-term behavior change that sticks."
        title="Lower costs."
        underlinedTitle="Improved health and productivity."
      />
      <BottomBanner />
    </main>
  );
}

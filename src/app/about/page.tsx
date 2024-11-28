import BottomBanner from "@/components/BottomBanner";
import FirstSection from "@/components/Hero";

export default function AboutPage() {
  // Render
  return (
    <main>
      <FirstSection
        backgroundImageURL="/FirstSectionBG1.webp"
        text="A holistic approach means addressing the needs of the whole person. Our diabetes management platform responds to the exact needs of members, factors in psychological and social determinants of health, builds sustainable behavioral change, and drastically decreases your healthcare costs."
        title="A better solution"
        underlinedTitle="for everyone."
      />
      <BottomBanner />
    </main>
  );
}
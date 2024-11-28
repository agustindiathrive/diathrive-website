import Image from "next/image";

import TextNavigationLink from "@/components/TextNavigationLink";

export default function FeaturedArticle(): JSX.Element {
  // Render
  return (
    <div>
      <div className="bg-dark-blue px-8 py-3.5">
        <TextNavigationLink href="/article/how-talk-about-diabetes" text="Featured Article" />
      </div>
      <Image
        alt="How To Talk About Diabetes"
        className="object-cover -z-10"
        height={500}
        width={500}
        priority
        src="/images/HowToTalkAboutDiabetes.webp"
      />
    </div>
  );
}
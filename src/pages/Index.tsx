import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionsOverviewSection } from "@/components/sections/SolutionsOverviewSection";
import { WhyAfricaSection } from "@/components/sections/WhyAfricaSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhoWeServeSection } from "@/components/sections/WhoWeServeSection";
import { MarketSection } from "@/components/sections/MarketSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HomeCTASection } from "@/components/sections/HomeCTASection";
import { usePageMeta } from "@/hooks/use-page-meta";

const Index = () => {
  usePageMeta(
    "SkillWatts — Ingénierie & Conseil en Énergie et Infrastructures | Niger, Afrique",
    "Société d'ingénierie et de conseil basée à Niamey : études de faisabilité, supervision de chantiers, énergie solaire, hydraulique et formation technique au Niger et en Afrique de l'Ouest."
  );

  return (
    <>
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <SolutionsOverviewSection />
        <WhyAfricaSection />
        <MarketSection />
        <HowItWorksSection />
        <WhoWeServeSection />
        <AboutSection />
        <HomeCTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;

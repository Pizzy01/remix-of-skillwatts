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

const Index = () => {
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

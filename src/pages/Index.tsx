import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionsOverviewSection } from "@/components/sections/SolutionsOverviewSection";
import { WhyAfricaSection } from "@/components/sections/WhyAfricaSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhoWeServeSection } from "@/components/sections/WhoWeServeSection";
import { HomeCTASection } from "@/components/sections/HomeCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SolutionsOverviewSection />
        <WhyAfricaSection />
        <HowItWorksSection />
        <WhoWeServeSection />
        <HomeCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

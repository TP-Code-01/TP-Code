import HeroSection from "./home_components/HeroSection";
import AboutSection from "./home_components/AboutSection";
import OfferingsSection from "./home_components/OfferingsSection";
import StatsSection from "./home_components/StatsSection";

export default function Home() {
  return (
    <main className="flex-grow pt-24">
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <StatsSection />
    </main>
  );
}

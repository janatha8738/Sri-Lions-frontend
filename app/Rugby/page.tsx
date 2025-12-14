// app/rugby/page.tsx
import Hero from "../Rugby/Hero";
import StickyNav from "../Rugby/StickyNav";
import OverviewSection from "../Rugby/OverviewSection";
import SquadSection from "../Rugby/SquadSection";
import LegacySection from "../Rugby/LegacySection";
import LadiesAcademySection from "../Rugby/LadiesAcademySection";
import GallerySection from "../Rugby/GallerySection";
import FixturesSection from "../Rugby/FixturesSection";
import Footer from "../Components/Footer";

export default function RugbyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-amber-950 text-white">
      <Hero />
      <StickyNav />

      {/* Clean spacing – no hover effects anywhere */}
      <div className="py-16 space-y-20 md:space-y-24 lg:space-y-28">
        <OverviewSection />
        <LegacySection />
        <SquadSection />
        
        <LadiesAcademySection />
        <GallerySection />
        <FixturesSection />
        <Footer />
      </div>
    </main>
  );
}
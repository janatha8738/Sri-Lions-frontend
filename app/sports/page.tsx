"use client"; // ← This single line fixes the error

import HeroBanner from './HeroBanner';
import SportsGrid from './SportsGrid';
import OverviewSection from './OverviewSection';
import TeamsSection from './TeamsSection';
import MediaSection from './MediaSection';
// Uncomment when you add these components
// import FixturesSection from './FixturesSection';
// import ResultsSection from './ResultsSection';
// import StandingsSection from './StandingsSection';

export default function SportsPage() {
  return (
    <>
      {/* Dark theme matching the homepage */}
      <div className="min-h-screen bg-[#0f0f0f] text-white">
        <HeroBanner />
        <SportsGrid />
        <OverviewSection />
        <TeamsSection />

        {/* <FixturesSection /> */}
        {/* <ResultsSection /> */}
        {/* <StandingsSection /> */}

        <MediaSection />
      </div>

      {/* Global styles using native Tailwind (no styled-jsx → no error) */}
      <style jsx global>{`
        :global(h1),
        :global(h2),
        :global(h3),
        :global(.text-lions-accent) {
          color: #ffcccc !important;
        }

        :global(.btn-primary) {
          @apply bg-[#800000] text-white px-8 py-4 rounded-full font-bold hover:bg-[#a00000] transition-all duration-300;
        }

        :global(.btn-secondary) {
          @apply bg-white text-[#800000] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300;
        }

        :global(.section-pad) {
          @apply py-16 px-6 md:px-12 lg:px-24;
        }

        :global(.card-sport) {
          @apply bg-[#1a1a1a] border border-[#333333] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl;
        }
      `}</style>
    </>
  );
}
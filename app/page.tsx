import Hero from "./components/Hero";
import NewsSection from "@/app/components/NewsSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <NewsSection />
      {/* other sections go here */}
    </main>
  );
}

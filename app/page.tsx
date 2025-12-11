import Hero from "./Components/Hero";
import NewsSection from "@/app/Components/NewsSection";
import EventsSection from "./Components/EventSection";
import SportsPrograms from "./Components/SportsSection";
import Footer from "./Components/Footer";
import OutdoorSportsIntro from "./Components/outdoor";

export default function HomePage() {
  return (
    <main>
      <Hero />
       <OutdoorSportsIntro/>
      <NewsSection />
      <EventsSection/>
      <SportsPrograms/>
      
      <Footer/>
      
      
    </main>
  );
}

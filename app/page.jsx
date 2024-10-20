// Components
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Journey />
      <Work />
      <Contact />
      {/* Temporary Div */}
      <div className="h-[3000px]"></div>
    </div>
  );
}

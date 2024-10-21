"use client"

import { useEffect } from "react";

// Components
import Hero from "@/components/Hero";
import FixedMenu from "@/components/FixedMenu";
import Services from "@/components/Services";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact";

export default function Home() {
  
  // implement locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);


  return (
    <>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Journey />
      <Work />
      <Contact />
      {/* Temporary Div */}
      <div className="h-[3000px]"></div>
    </>
  );
}

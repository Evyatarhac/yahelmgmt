import React from "react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import TalentsSection from "../components/TalentsSection";
import ContactSection from "../components/ContactSection";

const marqueeWords = [
  "יוצרים",
  "משפיענים",
  "מובילים",
  "CREATORS",
  "TALENT",
  "מותגים",
  "תוכן",
  "INFLUENCE",
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Energy strip between hero and roster */}
      <div className="bg-brand-red py-5 text-brand-cream">
        <Marquee>
          {marqueeWords.map((word, i) => (
            <span key={i} className="flex items-center">
              <span className="px-6 font-display text-2xl md:text-3xl">{word}</span>
              <span className="text-xl text-brand-pink-light">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      <TalentsSection />
      <ContactSection />
    </>
  );
}

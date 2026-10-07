import PestHero from "../components/pest-control/PestHero";
import AboutIntro from "../components/about/AboutIntro";
import AboutApproach from "../components/about/AboutApproach";

import LocalHelp from "../components/home/LocalHelp";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FinalCTA from "../components/home/FinalCTA";
import AboutHero from "../components/about/AboutHero";

import { useSEO } from "../utils/seo";

export default function About({ onQuote }) {
  useSEO(
    "About Get Local Pest Control",
    "Learn how Get Local Pest Control helps homeowners understand pest problems, explore treatment options, and take a clearer next step."
  );

  return (
    <>

      <AboutHero onQuote={onQuote} />

      <AboutIntro onQuote={onQuote} />

      <AboutApproach />

      <LocalHelp onQuote={onQuote} />

      <FinalCTA onQuote={onQuote} />
    </>
  );
}
import PestHero from "../components/pest-control/PestHero";
import InfoSection from "../components/pest-control/InfoSection";
import PestServices from "../components/home/PestServices";
import HowItWorks from "../components/home/HowItWorks";
import FAQ from "../components/home/FAQ";
import FinalCTA from "../components/home/FinalCTA";
import { useSEO } from "../utils/seo";
import PestIdentification from "../components/pest-control/PestIdentification";

export default function PestControl({ onQuote }) {
  useSEO(
    "Pest Control",
    "Explore household pest signs, treatment approaches, and prevention tips.",
  );
  return (
    <>
      <PestHero
        title="Pest Control Services"
        copy="Start with the pest. Understand the problem. Find an approach that makes sense for your home."
        onQuote={onQuote}
      />
      <InfoSection
        title="Every pest problem starts with a closer look."
        copy="Pest control combines identification, an assessment of activity, and a treatment plan suited to your home."
        items={[
          "Understand the pest species",
          "Locate affected areas",
          "Discuss treatment and follow-up",
        ]}
      />
      <PestServices title="Explore all pest-control services" />
      <FAQ />
      <PestIdentification />


      <FinalCTA onQuote={onQuote} />
    </>
  );
}

import PestHero from "../components/pest-control/PestHero";
import Process from "../components/home/HowItWorks";
import InfoSection from "../components/pest-control/InfoSection";
import FAQ from "../components/home/FAQ";
import FinalCTA from "../components/home/FinalCTA";
import { useSEO } from "../utils/seo";
export default function HowItWorks({ onQuote }) {
  useSEO(
    "How It Works",
    "What to expect when requesting help and discussing pest treatment.",
  );
  return (
    <>
      <PestHero
        title="From “what is that?” to a clear next step."
        copy="You bring the observations. A pest assessment helps bring the answers. Here is how the process can work."
        onQuote={onQuote}
      />
      <Process />
      <InfoSection
        title="Know what to expect."
        items={[
          "Tell us about the problem",
          "Request help for your home",
          "Evaluate the pest issue",
          "Determine an appropriate treatment",
          "Help reduce future pest activity",
        ]}
      />
      <InfoSection
        title="Make the most of your assessment."
        copy="Ask about preparation, treatment details, and follow-up. Availability and scheduling are confirmed by the provider."
        items={[
          "Note where activity occurs",
          "Share photographs when possible",
          "Ask about the next steps",
        ]}
      />
      <FAQ />
      <FinalCTA onQuote={onQuote} />
    </>
  );
}

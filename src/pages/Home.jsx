import { featuredServices } from "../data/pestServices";
import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import PestServices from "../components/home/PestServices";
import LocalHelp from "../components/home/LocalHelp";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HowItWorks from "../components/home/HowItWorks";
import CommonPests from "../components/home/CommonPests";
import SeasonalProtection from "../components/home/SeasonalProtection";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import FinalCTA from "../components/home/FinalCTA";
import { useSEO } from "../utils/seo";
export default function Home({ onQuote }) {
  useSEO(
    "Pest Control Help Near You",
    "Find pest-control help for ants, termites, rodents, cockroaches, bed bugs, mosquitoes and other household pests.",
  );
  return (
    <>
      <Hero onQuote={onQuote} />
      <TrustBar />
      <PestServices items={featuredServices} showAllLink />
      <LocalHelp onQuote={onQuote} />
      <WhyChooseUs />
      <HowItWorks />
      <FinalCTA mid onQuote={onQuote} />
      <CommonPests />
      <SeasonalProtection />
      <Testimonials />
      <FAQ />
      <FinalCTA onQuote={onQuote} />
    </>
  );
}

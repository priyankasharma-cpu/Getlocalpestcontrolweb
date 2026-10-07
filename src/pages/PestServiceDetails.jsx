import { useParams } from "react-router-dom";
import { getPestServiceBySlug, getRelatedServices } from "../data/pestServices";
import PestHero from "../components/pest-control/PestHero";
import InfoSection from "../components/pest-control/InfoSection";
import PestServices from "../components/home/PestServices";
import FAQ from "../components/home/FAQ";
import FinalCTA from "../components/home/FinalCTA";
import NotFound from "./NotFound";
import { useSEO } from "../utils/seo";
export default function PestServiceDetails({ onQuote }) {
  const { slug } = useParams();
  const pest = getPestServiceBySlug(slug);
  useSEO(pest?.seo ?? "Page Not Found", "This page could not be found.");
  if (!pest) return <NotFound />;
  return (
    <>
      <PestHero
        title={pest.hero.title}
        copy={pest.hero.description}
        eyebrow={pest.hero.eyebrow}
        pest={pest}
        onQuote={onQuote}
      />
      <InfoSection
        title={"About " + pest.name.toLowerCase()}
        copy={pest.overview.description}
        items={pest.overview.points}
      />
      <InfoSection
        title={"Common signs of " + pest.name.toLowerCase()}
        items={pest.signs}
      />
      <InfoSection
        title={"Why " + pest.name.toLowerCase() + " can be a problem"}
        copy={pest.concerns.description}
        items={pest.concerns.points}
      />
      <InfoSection title="The treatment process" items={pest.treatmentSteps} />
      <InfoSection
        title="Help reduce future activity."
        items={pest.preventionTips}
      />
      <PestServices
        title="Related pest services"
        compact
        items={getRelatedServices(pest)}
      />
      <FAQ items={pest.faqs} />
      <FinalCTA onQuote={onQuote} />
    </>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { pestServices, getCategoryLabel } from "../../data/pestServices";
import CallCTA from "../common/CallCTA";
import Reveal from "../common/Reveal";
import ServiceIcon from "../common/ServiceIcon";
import "./PestServices.css";
export function PestVisual({ pest, priority = false }) {
  return (
    <div
      className={
        "service-visual" + (pest.isPlaceholder ? " is-placeholder" : "")
      }
    >
      <img
        src={pest.image}
        loading={priority ? "eager" : "lazy"}
        alt={
          pest.isPlaceholder
            ? pest.serviceName + " — photo placeholder"
            : `${pest.serviceName} service`
        }
        width="640"
        height="420"
      />
      {pest.isPlaceholder && (
        <div className="placeholder-label">
          <ServiceIcon name={pest.icon} size={46} strokeWidth={1.25} />
          <span>{pest.name}</span>
        </div>
      )}
      <span className="service-category">
        {getCategoryLabel(pest.category)}
      </span>
    </div>
  );
}
export default function PestServices({
  items = pestServices,
  title = "Pest problems we can help with",
  compact = false,
  showAllLink = false,
}) {
  return (
    <section
      className={"section services" + (compact ? " services-compact" : "")}
    >
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">UNINVITED? WE UNDERSTAND.</span>
            <h2>{title}</h2>
          </div>
          <p>
            Different pests. Different approaches.
            <br />
            Find a starting point for what you’re seeing.
          </p>
        </Reveal>
        <div className="service-grid">
          {items.map((p, i) => (
            <Reveal
              as="article"
              className="service-card"
              key={p.slug}
              delay={(i % 4) * 0.045}
            >
              <Link
                className="service-image-link"
                to={"/pest-control/" + p.slug}
                tabIndex={-1}
                aria-hidden="true"
              >
                <PestVisual pest={p} />
              </Link>
              <div className="service-copy">
                <h3>
                  <Link to={"/pest-control/" + p.slug}>{p.serviceName}</Link>
                </h3>
                <p>{p.shortDescription}</p>
                <div className="service-actions">
                  <Link
                    className="card-link"
                    aria-label={"Learn more about " + p.serviceName}
                    to={"/pest-control/" + p.slug}
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                  <CallCTA className="card-call" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {showAllLink && (
          <Reveal className="catalog-link">
            <Link className="button secondary" to="/pest-control">
              View All Pest Control Services
              <ArrowUpRight size={19} />
            </Link>
            <span>
              A clearer starting point for every kind of pest problem.
            </span>
          </Reveal>
        )}
      </div>
    </section>
  );
}

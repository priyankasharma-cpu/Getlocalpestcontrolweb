import Reveal from "../common/Reveal";
import {
  ScanSearch,
  SlidersHorizontal,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import "./WhyChooseUs.css";
const benefits = [
  [
    ScanSearch,
    "Identify the problem",
    "Start by understanding the pest and affected areas.",
  ],
  [
    SlidersHorizontal,
    "Find a treatment approach",
    "Different pest problems may require different solutions.",
  ],
  [
    ShieldCheck,
    "Help protect your home",
    "Focus on treatment plus practical prevention steps.",
  ],
  [
    MapPin,
    "Convenient local support",
    "Make it easier to request pest-control help.",
  ],
];
export default function WhyChooseUs() {
  return (
    <section className="section why">
      <div className="container">
        <Reveal>
          <span className="eyebrow">THOUGHTFUL HELP, FROM THE START</span>
          <h2>Why choose Get Local Pest Control?</h2>
        </Reveal>
        <div className="benefit-grid">
          {benefits.map(([Icon, title, copy], i) => (
            <Reveal as="article" key={title} delay={i * 0.06}>
              <Icon size={30} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

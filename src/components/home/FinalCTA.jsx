import Reveal from "../common/Reveal";
import { ArrowUpRight } from "lucide-react";
import CallCTA from "../common/CallCTA";
import "./FinalCTA.css";
export default function FinalCTA({ onQuote, mid = false }) {
  return (
    <section className="cta-band">
      <Reveal className="container">
        <div>
          <span className="eyebrow">LET’S TAKE THE NEXT STEP</span>
          <h2>
            {mid
              ? "Seeing signs of pests around your home?"
              : "Ready to deal with your pest problem?"}
          </h2>
          <p>
            Tell us what you’re seeing and find a starting point for your home.
          </p>
        </div>
        <div className="button-row">
          <button className="button accent" onClick={onQuote}>
            Get a Free Quote
            <ArrowUpRight size={18} />
          </button>
          <CallCTA />
        </div>
      </Reveal>
    </section>
  );
}

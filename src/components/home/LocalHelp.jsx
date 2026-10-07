import Reveal from "../common/Reveal";
import { CheckCircle2 } from "lucide-react";
import hero from "../../assets/images/hero/pest-control-hero.webp";
import "./LocalHelp.css";
export default function LocalHelp({ onQuote }) {
  return (
    <section className="section local-help">
      <Reveal className="container split">
        <div className="local-image">
          <img
            src={hero}
            alt="Technician assessing pest activity around a home"
            loading="lazy"
          />
          <div className="image-label">
            GOOD HELP STARTS WITH UNDERSTANDING.
          </div>
        </div>
        <div>
          <span className="eyebrow">A HOME SHOULD FEEL LIKE HOME</span>
          <h2>
            When pests show up,
            <br />
            get local help.
          </h2>
          <p>
            You don’t need to have all the answers. Start with what you’ve
            noticed, and take the next step toward understanding the problem.
          </p>
          <ul className="check-list">
            {[
              "Identify the pest and where it’s active",
              "Explore a treatment approach for your home",
              "Learn practical steps to reduce future activity",
            ].map((t) => (
              <li key={t}>
                <CheckCircle2 size={20} />
                {t}
              </li>
            ))}
          </ul>
          <button className="button primary" onClick={onQuote}>
            Find Pest Control Help
          </button>
        </div>
      </Reveal>
    </section>
  );
}

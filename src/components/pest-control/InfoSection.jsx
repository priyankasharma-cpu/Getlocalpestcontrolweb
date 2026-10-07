import Reveal from "../common/Reveal";
import { CheckCircle2 } from "lucide-react";
export default function InfoSection({
  eyebrow = "UNDERSTAND YOUR HOME",
  title,
  copy,
  items = [],
}) {
  return (
    <section className="section info-section">
      <Reveal className="container split">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {copy && <p>{copy}</p>}
        </div>
        <div className="info-cards">
          {items.map((item, i) => {
            // Existing overview sections pass strings; treatment sections pass named steps.
            const title = typeof item === "string" ? item : item.title;
            const description =
              typeof item === "string" ? null : item.description;
            return (
              <article key={title}>
                <CheckCircle2 size={22} />
                <div>
                  <span className="eyebrow">0{i + 1}</span>
                  <h3>{title}</h3>
                  {description && <p>{description}</p>}
                </div>
              </article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

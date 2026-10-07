import Reveal from "../common/Reveal";
import { Plus, Minus } from "lucide-react";
import { useState, useId } from "react";
import { faqs } from "../../data/faqs";
import "./FAQ.css";
export default function FAQ({ items = faqs }) {
  const [active, setActive] = useState(null),
    id = useId();
  return (
    <section className="section faq">
      <Reveal className="container faq-layout">
        <div>
          <span className="eyebrow">A FEW HELPFUL ANSWERS</span>
          <h2>
            Good questions.
            <br />
            Clearer next steps.
          </h2>
          <p>
            What homeowners often want
            <br />
            to know about pest control.
          </p>
        </div>
        <div>
          {items.map((faq, i) => {
            // General FAQs retain their legacy pairs; service FAQs use named fields.
            const q = Array.isArray(faq) ? faq[0] : faq.question;
            const a = Array.isArray(faq) ? faq[1] : faq.answer;
            return (
              <div className="faq-item" key={q}>
                <h3>
                  <button
                    aria-expanded={active === i}
                    aria-controls={id + i}
                    onClick={() => setActive(active === i ? null : i)}
                  >
                    {q}
                    {active === i ? <Minus size={19} /> : <Plus size={19} />}
                  </button>
                </h3>
                <div id={id + i} hidden={active !== i}>
                  <p>{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

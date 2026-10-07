import { testimonials } from "../../data/testimonials";
export default function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <section className="section container">
      <h2>Homeowner experiences</h2>
      {testimonials.map((t) => (
        <blockquote key={t.id}>
          {t.quote}
          <cite>{t.name}</cite>
        </blockquote>
      ))}
    </section>
  );
}

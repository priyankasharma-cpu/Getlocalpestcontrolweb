import { useSEO } from "../utils/seo";
export default function Terms() {
  useSEO("Terms of Use", "Initial terms of use draft.");
  return (
    <article className="section legal container">
      <span className="eyebrow">WEBSITE INFORMATION</span>
      <h1>Terms of Use</h1>
      <p className="legal-notice">
        Initial draft · Final review required before launch
      </p>
      <section>
        <h2>General information</h2>
        <p>
          Content provides general educational information about household
          pests. An assessment is needed to determine an appropriate treatment.
        </p>
      </section>
      <section>
        <h2>Requests and appointments</h2>
        <p>
          A form submission does not create a service agreement, confirm
          availability, or schedule a visit. Preview-mode forms do not send
          requests.
        </p>
      </section>
      <section>
        <h2>Provider services</h2>
        <p>
          Scope, pricing, preparation, scheduling, and follow-up must be
          confirmed directly with the provider.
        </p>
      </section>
      <section>
        <h2>Site use</h2>
        <p>
          Use this website lawfully and avoid submitting sensitive or unrelated
          information. Operator details, applicable terms, and dispute
          procedures require final review before commercial launch.
        </p>
      </section>
    </article>
  );
}

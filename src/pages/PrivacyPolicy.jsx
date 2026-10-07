import { useSEO } from "../utils/seo";
export default function PrivacyPolicy() {
  useSEO("Privacy Policy", "Initial privacy policy draft.");
  return (
    <article className="section legal container">
      <span className="eyebrow">WEBSITE INFORMATION</span>
      <h1>Privacy Policy</h1>
      <p className="legal-notice">
        Initial draft · Final review required before live lead collection
      </p>
      <section>
        <h2>Information entered in forms</h2>
        <p>
          Forms request contact details, a ZIP code, and a description of the
          pest problem. In preview mode, information is not sent or stored by
          this application.
        </p>
      </section>
      <section>
        <h2>Live submissions</h2>
        <p>
          Before enabling live submissions, confirm recipients, purposes,
          retention periods, privacy rights, provider disclosures, and a privacy
          contact channel.
        </p>
      </section>
      <section>
        <h2>Website technology</h2>
        <p>
          No advertising analytics or tracking cookies are configured. Hosting
          and third-party font services may process technical request data under
          their own policies.
        </p>
      </section>
      <section>
        <h2>Your choices and contact</h2>
        <p>
          Contact details and procedures for access, correction, and deletion
          must be supplied before public launch. This draft requires review for
          actual operating practices and applicable requirements.
        </p>
      </section>
    </article>
  );
}

import { Link } from "react-router-dom";
import { useSEO } from "../utils/seo";
export default function NotFound() {
  useSEO("Page Not Found", "The page could not be found.");
  return (
    <section className="section container not-found">
      <span className="eyebrow">404 · A WRONG TURN</span>
      <h1>
        This page has
        <br />
        flown the nest.
      </h1>
      <p>Let’s get you back to a helpful starting point.</p>
      <Link className="button primary" to="/">
        Back to Home
      </Link>
    </section>
  );
}

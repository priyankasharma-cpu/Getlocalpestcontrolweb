import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { pestServices } from "../../data/pestServices";
import logo from "../../assets/logo/logo.png";
import CallCTA from "./CallCTA";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Get Local Pest Control" />
          <p>
            Local help for the place
            <br />
            you call home.
          </p>
          <small>
            Helping homeowners take an informed next step with common pest
            problems.
          </small>
          <CallCTA variant="footer" label="Call Us" />
        </div>
        {[
          ["Pest Control", pestServices.slice(0, 6)],
          ["More Pests", pestServices.slice(6, 12)],
        ].map(([title, items]) => (
          <div key={title}>
            <h3>{title}</h3>
            {items.map((p) => (
              <Link key={p.slug} to={"/pest-control/" + p.slug}>
                {p.name}
              </Link>
            ))}
            <Link to="/pest-control">
              View all services <ArrowRight size={14} />
            </Link>
          </div>
        ))}
        <div>
          <h3>Company</h3>
          {[
            ["About Us", "about"],
            ["How It Works", "how-it-works"],
            ["Contact", "contact"],
            ["Privacy Policy", "privacy-policy"],
            ["Terms", "terms"],
          ].map(([name, path]) => (
            <Link key={path} to={"/" + path}>
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Get Local Pest Control. All rights
          reserved.
        </span>
        <span>Your home. Your next step.</span>
      </div>
    </footer>
  );
}

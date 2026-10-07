import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Home,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import CallCTA from "../common/CallCTA";
import heroImage from "../../assets/images/backgrounds/PestControlServices.png";

import "./PestHero.css";

const trustItems = [
  "Residential pest help",
  "Multiple pest services",
  "Clear next steps",
];

export default function PestControlHero({ onQuote, pest, title, copy, eyebrow }) {
  const reduced = useReducedMotion();

  return (
    <section className="pc-hero">
      <div className="pc-hero-pattern" />
      <div className="pc-hero-glow pc-hero-glow-one" />
      <div className="pc-hero-glow pc-hero-glow-two" />

      <div className="container pc-hero-grid">
        {/* LEFT */}

        <motion.div
          className="pc-hero-content"
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduced ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="pc-hero-eyebrow">
            <span>
              <Sparkles size={14} />
            </span>

            {eyebrow || pest?.hero.eyebrow || "PEST CONTROL SERVICES"}
          </div>

          <h1>
            {title || pest?.hero.title || <>Protect your home from <em>unwanted pests.</em></>}
          </h1>

          <p className="pc-hero-lead">
            {copy || pest?.hero.description || "Start with the pest. Understand the problem. Explore an appropriate approach for your home."}
          </p>

          <div className="pc-hero-actions">
            <button
              type="button"
              className="button accent pc-primary-btn"
              onClick={onQuote}
            >
              Get a Free Quote

              <span>
                <ArrowUpRight size={19} />
              </span>
            </button>

            <CallCTA />
          </div>

          <div className="pc-trust-row">
            {trustItems.map((item) => (
              <div key={item}>
                <span>
                  <Check size={12} strokeWidth={3} />
                </span>

                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="pc-hero-visual"
          initial={
            reduced
              ? false
              : {
                opacity: 0,
                x: 40,
                scale: 0.97,
              }
          }
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: reduced ? 0 : 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="pc-image-card">
            <img
              src={pest?.image ?? heroImage}
              alt={pest ? `${pest.serviceName} service` : "Pest control technician treating a residential home"}
              fetchPriority="high"
            />

            <div className="pc-image-gradient" />

            <div className="pc-image-info">
              <span>
                <Home size={22} />
              </span>

              <div>
                <small>{pest?.serviceName || "RESIDENTIAL PEST CONTROL"}</small>
                <strong>
                  {pest ? "Understand the signs. Find your next step." : "A practical approach for a more comfortable home."}
                </strong>
              </div>
            </div>
          </div>

          {/* FLOATING CARD */}

          <motion.div
            className="pc-floating-card pc-inspection-card"
            animate={
              reduced
                ? {}
                : {
                  y: [0, -7, 0],
                }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="pc-floating-icon">
              <Search size={25} />
            </span>

            <div>
              <small>STEP ONE</small>
              <strong>{pest ? `Identify ${pest.name.toLowerCase()}` : "Identify the pest"}</strong>
            </div>
          </motion.div>

          <div className="pc-shield-card">
            <ShieldCheck size={24} />

            <div>
              <small>HOME-FIRST</small>
              <strong>Pest solutions</strong>
            </div>
          </div>

          <div className="pc-dot-pattern" />
        </motion.div>
      </div>

      <div className="pc-watermark" aria-hidden="true">
        PEST CONTROL
      </div>
    </section>
  );
}

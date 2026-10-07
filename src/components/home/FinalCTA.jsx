import Reveal from "../common/Reveal";
import {
  ArrowUpRight,
  Check,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { CONTACT_PHONE } from "../../utils/constants";
import "./FinalCTA.css";

const trustPoints = [
  "Simple request process",
  "Residential pest help",
  "Clear next step",
];

export default function FinalCTA({ onQuote, mid = false }) {
  return (
    <section className="final-cta">
      {/* Decorative background */}
      <div className="final-cta__grid" aria-hidden="true" />
      <div
        className="final-cta__glow final-cta__glow--one"
        aria-hidden="true"
      />
      <div
        className="final-cta__glow final-cta__glow--two"
        aria-hidden="true"
      />

      <Reveal className="container final-cta__container">
        {/* ================= LEFT CONTENT ================= */}
        <div className="final-cta__content">
          <div className="final-cta__eyebrow">
            <span>
              <Sparkles size={14} />
            </span>
            LET&apos;S TAKE THE NEXT STEP
          </div>

          <h2>
            {mid ? (
              <>
                Seeing signs of pests
                <br />
                around your <em>home?</em>
              </>
            ) : (
              <>
                Ready to deal with
                <br />
                your <em>pest problem?</em>
              </>
            )}
          </h2>

          <p className="final-cta__description">
            Tell us what you&apos;re seeing and take a clearer first
            step toward addressing the pest problem in your home.
          </p>

          <div className="final-cta__trust">
            {trustPoints.map((item) => (
              <span key={item}>
                <i>
                  <Check size={11} strokeWidth={3} />
                </i>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ================= ACTION CARD ================= */}
        <div className="final-cta__actions">
          <div className="final-cta__action-header">
            <span className="final-cta__shield">
              <ShieldCheck size={23} />
            </span>

            <div>
              <small>READY WHEN YOU ARE</small>
              <strong>Choose how you&apos;d like to start</strong>
            </div>
          </div>

          {/* FREE QUOTE */}
          <button
            type="button"
            className="button accent final-cta__quote"
            onClick={onQuote}
          >
            <span>Get a Free Quote</span>

            <span className="final-cta__quote-arrow">
              <ArrowUpRight size={18} />
            </span>
          </button>

          {/* DIVIDER */}
          <div className="final-cta__divider">
            <span />
            <small>OR CALL NOW</small>
            <span />
          </div>

          {/* ================= CUSTOM CALL BUTTON ================= */}
          <a
            href={CONTACT_PHONE.href}
            className="final-call"
            aria-label={`Call Get Local Pest Control at ${CONTACT_PHONE.display}`}
            title={`Call ${CONTACT_PHONE.display}`}
          >
            <span className="final-call__shine" aria-hidden="true" />

            {/* Animated phone */}
            <span className="final-call__visual" aria-hidden="true">
              <span className="final-call__pulse final-call__pulse--one" />
              <span className="final-call__pulse final-call__pulse--two" />

              <span className="final-call__phone">
                <PhoneCall size={22} strokeWidth={2.2} />

                <span className="final-call__online" />
              </span>
            </span>

            {/* Content */}
            <span className="final-call__content">
              <span className="final-call__label">
                <i />
                CALL NOW
              </span>

              <strong>{CONTACT_PHONE.display}</strong>

              <small>Tap to call</small>
            </span>

            {/* Arrow */}
            <span className="final-call__arrow" aria-hidden="true">
              <ArrowUpRight size={18} />
            </span>
          </a>

          <p className="final-cta__microcopy">
            <ShieldCheck size={13} />
            Call directly to discuss your pest concern.
          </p>
        </div>
      </Reveal>

      <div className="final-cta__watermark" aria-hidden="true">
        LOCAL HELP
      </div>
    </section>
  );
}
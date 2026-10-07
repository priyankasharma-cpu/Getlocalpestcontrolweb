import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  Check,
  MapPin,
  MessageSquareText,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import LeadForm from "../components/common/LeadForm";
import CallCTA from "../components/common/CallCTA";
import { useSEO } from "../utils/seo";

import "../components/contact/ContactForm.css";

const contactSteps = [
  {
    icon: MessageSquareText,
    number: "01",
    title: "Tell us what you noticed",
    copy: "Share the signs, pest activity, or areas of your home that concern you.",
  },
  {
    icon: MapPin,
    number: "02",
    title: "Start with your ZIP code",
    copy: "Your location helps determine available pest-control options.",
  },
];

const trustPoints = [
  "Simple request process",
  "Residential pest concerns",
  "Clear next step",
];

export default function Contact() {
  const reduced = useReducedMotion();

  return (
    <main className="contact-page">
      {/* Decorative background */}
      <div className="contact-bg-grid" aria-hidden="true" />
      <div className="contact-glow contact-glow-one" aria-hidden="true" />
      <div className="contact-glow contact-glow-two" aria-hidden="true" />

      <div className="container contact-layout">
        {/* ================= LEFT ================= */}

        <motion.section
          className="contact-content"
          initial={reduced ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduced ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="contact-eyebrow">
            <span>
              <Sparkles size={14} />
            </span>

            LET&apos;S TALK ABOUT YOUR HOME
          </div>

          <h1>
            Small signs.
            <br />
            Worth a{" "}
            <em>conversation.</em>
          </h1>

          <p className="contact-intro">
            Tell us what you&apos;ve noticed. You don&apos;t have to
            know the pest&apos;s name to take the first step.
          </p>

          {/* STEPS */}

          <div className="contact-steps">
            {contactSteps.map(
              ({ icon: Icon, number, title, copy }, index) => (
                <motion.article
                  key={title}
                  initial={
                    reduced
                      ? false
                      : {
                        opacity: 0,
                        x: -20,
                      }
                  }
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: reduced ? 0 : 0.45,
                    delay: reduced ? 0 : 0.2 + index * 0.1,
                  }}
                >
                  <span className="contact-step-number">
                    {number}
                  </span>

                  <div className="contact-step-icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </motion.article>
              )
            )}
          </div>

          {/* CALL AREA */}

          <motion.div
            className="contact-call-panel"
            initial={reduced ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduced ? 0 : 0.5,
              delay: reduced ? 0 : 0.4,
            }}
          >
            <div className="contact-call-heading">
              <div className="contact-phone-symbol">
                <PhoneCall size={23} />

                <span className="contact-phone-ring ring-one" />
                <span className="contact-phone-ring ring-two" />
              </div>

              <div>
                <small>PREFER TO CALL?</small>
                <strong>Talk about your pest problem</strong>
              </div>
            </div>

            <CallCTA label="Call Now" />
          </motion.div>

          {/* TRUST */}

          <div className="contact-trust">
            {trustPoints.map((item) => (
              <span key={item}>
                <i>
                  <Check size={11} strokeWidth={3} />
                </i>

                {item}
              </span>
            ))}
          </div>
        </motion.section>

        {/* ================= RIGHT FORM ================= */}

        <motion.section
          className="contact-form-wrap"
          initial={
            reduced
              ? false
              : {
                opacity: 0,
                x: 35,
                scale: 0.98,
              }
          }
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: reduced ? 0 : 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* floating label */}

          <div className="contact-form-floating">
            <ShieldCheck size={18} />
            Simple. Clear. Easy to start.
          </div>

          <div className="contact-form-card">
            {/* CARD HEADER */}

            <div className="contact-form-header">
              <div>
                <span className="contact-form-kicker">
                  REQUEST PEST-CONTROL HELP
                </span>

                <h2>Let&apos;s start here.</h2>

                <p>
                  Share a few details about you and the pest problem
                  you&apos;re experiencing.
                </p>
              </div>

              <span className="contact-form-arrow">
                <ArrowDownRight size={23} />
              </span>
            </div>

            {/* progress decoration */}

            <div className="contact-form-progress">
              <span />
              <span />
              <span />
            </div>

            <div className="contact-form-body">
              <LeadForm />
            </div>

            <div className="contact-form-footer">
              <ShieldCheck size={15} />

              <span>
                Your information helps us understand your request.
              </span>
            </div>
          </div>

          {/* background shape */}

          <div
            className="contact-form-decoration"
            aria-hidden="true"
          />
        </motion.section>
      </div>

      <div className="contact-watermark" aria-hidden="true">
        LOCAL HELP
      </div>
    </main>
  );
}
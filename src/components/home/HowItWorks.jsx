import { motion, useReducedMotion } from "framer-motion";
import {
  MessageSquareText,
  MapPinned,
  SearchCheck,
  ShieldCheck,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Tell us about your pest problem",
    copy: "Share what you’ve noticed, where you’ve seen activity, and what concerns you.",
  },
  {
    number: "02",
    icon: MapPinned,
    title: "Request local pest control help",
    copy: "Take the next step toward getting your pest problem professionally assessed.",
  },
  {
    number: "03",
    icon: SearchCheck,
    title: "Inspect & determine treatment",
    copy: "Identify pest activity and discuss an appropriate treatment approach.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Treat & help prevent future activity",
    copy: "Combine treatment with practical steps designed to help reduce future activity.",
  },
];

export default function HowItWorks() {
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="process section">
      {/* Decorative background */}
      <div className="process-glow process-glow-left" />
      <div className="process-glow process-glow-right" />

      <div className="container process-container">
        {/* Heading */}
        <motion.div
          className="process-heading"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reducedMotion ? 0 : 0.55,
          }}
        >
          <div className="process-eyebrow">
            <span className="process-eyebrow-icon">
              <Sparkles size={14} />
            </span>

            LESS GUESSWORK. A CLEARER PATH.
          </div>

          <h2>
            A few steps toward
            <br />
            <span>a more comfortable home.</span>
          </h2>

          <p className="process-intro">
            From identifying the problem to understanding treatment options,
            getting pest control help can be simple and straightforward.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="process-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                className="process-card"
                key={step.number}
                variants={cardVariants}
              >
                {/* Number */}
                <div className="process-number">
                  {step.number}
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="process-connector" aria-hidden="true">
                    <span className="connector-line" />

                    <span className="connector-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                )}

                {/* Large SVG icon */}
                <div className="process-icon-area">
                  <div className="process-icon-glow" />

                  <div className="process-icon-ring">
                    <Icon
                      size={46}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="mini-check">
                    <Check size={13} strokeWidth={3} />
                  </span>
                </div>

                {/* Text */}
                <div className="process-card-content">
                  <span className="process-step-label">
                    STEP {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.copy}</p>
                </div>

                {/* Decorative progress */}
                <div className="process-progress">
                  <span
                    style={{
                      width: `${25 * (index + 1)}%`,
                    }}
                  />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
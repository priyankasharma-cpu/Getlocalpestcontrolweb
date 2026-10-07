import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  Home,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import CallCTA from "../common/CallCTA";
import hero from "../../assets/images/hero/pest-control-hero.webp";
import "./Hero.css";

const trustItems = [
  {
    icon: MapPin,
    title: "Local Pest Help",
    text: "Help near your area",
  },
  {
    icon: ShieldCheck,
    title: "Pest Solutions",
    text: "Options for your home",
  },
  {
    icon: BadgeCheck,
    title: "Simple Next Step",
    text: "Clear service guidance",
  },
];

export default function Hero({ onQuote }) {
  const reducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="hero">
      {/* Background Image */}
      <motion.img
        className="hero-image"
        src={hero}
        alt="Pest control technician working beside an American suburban home"
        fetchPriority="high"
        initial={reducedMotion ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{
          duration: reducedMotion ? 0 : 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Premium overlays */}
      <div className="hero-shade" />
      <div className="hero-glow" />
      <div className="hero-pattern" />

      <div className="container hero-content">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reducedMotion ? 0 : 0.09,
              },
            },
          }}
        >
          {/* Eyebrow */}
          <motion.div className="eyebrow" variants={fadeUp}>
            <span className="eyebrow-icon">
              <Sparkles size={14} strokeWidth={2.2} />
            </span>

            <span className="eyebrow-text">
              LOCAL PEST CONTROL
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={fadeUp}>
            Local pest control
            <br />
            you can <em>count on.</em>
          </motion.h1>

          {/* Description */}
          <motion.p className="hero-description" variants={fadeUp}>
            Home is for living. Not for pests. Find help identifying your pest
            problem and an appropriate treatment approach for your home.
          </motion.p>

          {/* CTA */}
          <motion.div className="button-row" variants={fadeUp}>
            <button
              type="button"
              className="button accent hero-primary-btn"
              onClick={onQuote}
            >
              <span>Get a Free Quote</span>

              <span className="button-arrow">
                <ArrowUpRight size={19} />
              </span>
            </button>

            <CallCTA />
          </motion.div>

          {/* Quick benefits */}
          <motion.div className="hero-checks" variants={fadeUp}>
            {[
              "Local pest help",
              "Customized solutions",
              "Simple next steps",
            ].map((item) => (
              <span key={item}>
                <span className="check-icon">
                  <Check size={13} strokeWidth={3} />
                </span>
                {item}
              </span>
            ))}
          </motion.div>

          {/* Premium trust cards */}
          <motion.div className="hero-trust-grid" variants={fadeUp}>
            {trustItems.map(({ icon: Icon, title, text }) => (
              <div className="hero-trust-card" key={title}>
                <div className="hero-trust-icon">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <div>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating visual badge */}
      <motion.div
        className="hero-floating-badge"
        initial={reducedMotion ? false : { opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: reducedMotion ? 0 : 0.7,
          delay: reducedMotion ? 0 : 0.5,
        }}
      >
        <div className="floating-icon">
          <Home size={28} strokeWidth={1.7} />
          <span className="floating-shield">
            <ShieldCheck size={15} />
          </span>
        </div>

        <div>
          <small>HOME PROTECTION</small>
          <strong>Pest Help Starts Here</strong>
        </div>
      </motion.div>

      <div className="hero-caption">
        <span />
        A MORE COMFORTABLE HOME STARTS HERE
      </div>
    </section>
  );
}
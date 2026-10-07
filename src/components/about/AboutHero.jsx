import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowUpRight,
    Check,
    Home,
    MapPin,
    SearchCheck,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import CallCTA from "../common/CallCTA";
import aboutHero from "../../assets/images/about/bout-pest.png";
import "./AboutHero.css";

const benefits = [
    "Residential pest concerns",
    "Clear next steps",
    "Local pest-control help",
];

export default function AboutHero({ onQuote }) {
    const reduced = useReducedMotion();

    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduced ? 0 : 0.65,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="about-hero">
            {/* Decorative background */}
            <div className="about-hero-grid-pattern" />
            <div className="about-hero-glow" />

            <div className="container about-hero-container">
                {/* ================= LEFT ================= */}

                <motion.div
                    className="about-hero-content"
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: reduced ? 0 : 0.09,
                            },
                        },
                    }}
                >
                    <motion.div
                        className="about-hero-eyebrow"
                        variants={fadeUp}
                    >
                        <span>
                            <Sparkles size={14} />
                        </span>

                        ABOUT GET LOCAL PEST CONTROL
                    </motion.div>

                    <motion.h1 variants={fadeUp}>
                        Local help.
                        <br />
                        A <em>home-first</em>
                        <br />
                        approach.
                    </motion.h1>

                    <motion.p
                        className="about-hero-description"
                        variants={fadeUp}
                    >
                        Pest problems can be stressful. We make it easier to
                        understand what you're seeing, explore the next step,
                        and request local pest-control help.
                    </motion.p>

                    {/* CTAs */}

                    <motion.div
                        className="about-hero-actions"
                        variants={fadeUp}
                    >
                        <button
                            type="button"
                            className="button accent about-hero-primary"
                            onClick={onQuote}
                        >
                            <span>Get a Free Quote</span>

                            <span className="about-hero-arrow">
                                <ArrowUpRight size={19} />
                            </span>
                        </button>

                        <CallCTA />
                    </motion.div>

                    {/* Benefits */}

                    <motion.div
                        className="about-hero-benefits"
                        variants={fadeUp}
                    >
                        {benefits.map((benefit) => (
                            <div key={benefit}>
                                <span>
                                    <Check size={12} strokeWidth={3} />
                                </span>

                                {benefit}
                            </div>
                        ))}
                    </motion.div>

                    {/* Mini info cards */}

                    <motion.div
                        className="about-hero-mini-cards"
                        variants={fadeUp}
                    >
                        <div className="about-mini-card">
                            <MapPin size={22} />

                            <div>
                                <small>LOCAL FOCUS</small>
                                <strong>Help for your home</strong>
                            </div>
                        </div>

                        <div className="about-mini-card">
                            <SearchCheck size={22} />

                            <div>
                                <small>START SMART</small>
                                <strong>Understand the problem</strong>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* ================= RIGHT ================= */}

                <motion.div
                    className="about-hero-visual"
                    initial={
                        reduced
                            ? false
                            : {
                                opacity: 0,
                                x: 45,
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
                    {/* Main image */}

                    <div className="about-hero-image-wrap">
                        <img
                            src={aboutHero}
                            alt="Get Local Pest Control technician inspecting a residential home"
                            fetchPriority="high"
                        />

                        <div className="about-hero-image-shade" />

                        {/* image bottom content */}

                        <div className="about-image-bottom">
                            <span className="about-image-bottom-icon">
                                <Home size={22} />
                            </span>

                            <div>
                                <small>BUILT AROUND YOUR HOME</small>
                                <strong>
                                    Understand the problem before the next step.
                                </strong>
                            </div>
                        </div>
                    </div>

                    {/* Floating shield */}

                    <motion.div
                        className="about-protection-card"
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
                        <div className="about-protection-icon">
                            <ShieldCheck size={29} />

                            <span>
                                <Check size={11} strokeWidth={4} />
                            </span>
                        </div>

                        <div>
                            <small>HOME-FIRST APPROACH</small>
                            <strong>Clearer pest-control guidance</strong>
                        </div>
                    </motion.div>

                    {/* decorative badge */}

                    <div className="about-hero-circle">
                        <span>LOCAL</span>
                        <strong>PEST</strong>
                        <span>HELP</span>
                    </div>
                </motion.div>
            </div>

            {/* Large decorative text */}

            <div className="about-hero-watermark" aria-hidden="true">
                GET LOCAL
            </div>

            <div className="about-hero-bottom-line" />
        </section>
    );
}
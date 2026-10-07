import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowUpRight,
    Bug,
    Check,
    Home,
    MapPin,
    Search,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import aboutImage from "../../assets/images/about/bout-pest-control.png";
import "./AboutIntro.css";

const features = [
    {
        icon: Bug,
        title: "Understand the problem",
        copy: "Learn about common household pests and the signs they may leave behind.",
    },
    {
        icon: MapPin,
        title: "Request local help",
        copy: "Take a simpler next step when you’re ready to seek pest-control assistance.",
    },
    {
        icon: Home,
        title: "Home-focused guidance",
        copy: "Explore information designed around common residential pest concerns.",
    },
];

export default function AboutIntro({ onQuote }) {
    const reducedMotion = useReducedMotion();

    return (
        <section className="about-intro section">
            <div className="about-intro-glow" />

            <div className="container about-intro-grid">
                {/* IMAGE SIDE */}
                <motion.div
                    className="about-intro-visual"
                    initial={reducedMotion ? false : { opacity: 0, x: -35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: reducedMotion ? 0 : 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <div className="about-image-frame">
                        <img
                            src={aboutImage}
                            alt="Pest control technician inspecting a residential home"
                            loading="lazy"
                        />

                        <div className="about-image-overlay" />

                        <div className="about-image-label">
                            <span className="about-label-icon">
                                <ShieldCheck size={22} />
                            </span>

                            <div>
                                <small>OUR FOCUS</small>
                                <strong>Helping homeowners take the next step</strong>
                            </div>
                        </div>
                    </div>

                    <div className="about-floating-card">
                        <span className="about-floating-icon">
                            <Search size={25} />
                        </span>

                        <div>
                            <small>START WITH</small>
                            <strong>Understanding the pest</strong>
                        </div>

                        <Check size={18} className="about-floating-check" />
                    </div>

                    <div className="about-dots" />
                </motion.div>

                {/* CONTENT SIDE */}
                <motion.div
                    className="about-intro-content"
                    initial={reducedMotion ? false : { opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: reducedMotion ? 0 : 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <div className="about-eyebrow">
                        <span>
                            <Sparkles size={14} />
                        </span>

                        WHO WE ARE
                    </div>

                    <h2>
                        Pest problems are easier to handle when you know{" "}
                        <em>where to start.</em>
                    </h2>

                    <p className="about-lead">
                        Get Local Pest Control provides a starting point for homeowners
                        looking for pest-control help.
                    </p>

                    <p className="about-description">
                        Our focus is practical information about household pests and a
                        straightforward way to describe what you’re seeing before taking
                        the next step.
                    </p>

                    <div className="about-feature-list">
                        {features.map(({ icon: Icon, title, copy }) => (
                            <div className="about-feature" key={title}>
                                <div className="about-feature-icon">
                                    <Icon size={25} strokeWidth={1.7} />
                                </div>

                                <div>
                                    <h3>{title}</h3>
                                    <p>{copy}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        className="button accent about-button"
                        onClick={onQuote}
                    >
                        Get a Free Quote

                        <span>
                            <ArrowUpRight size={18} />
                        </span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
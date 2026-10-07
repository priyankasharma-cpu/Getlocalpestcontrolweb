import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowRight,
    Eye,
    Lightbulb,
    ShieldCheck,
} from "lucide-react";

import "./AboutApproach.css";

const items = [
    {
        number: "01",
        icon: Eye,
        title: "Describe the signs",
        copy: "Start with what you’ve noticed, where activity appears, and the signs around your home.",
    },
    {
        number: "02",
        icon: Lightbulb,
        title: "Understand the options",
        copy: "Learn more about the pest and discuss an appropriate approach for the situation.",
    },
    {
        number: "03",
        icon: ShieldCheck,
        title: "Think beyond treatment",
        copy: "Ask about practical prevention and follow-up steps that may help reduce future activity.",
    },
];

export default function AboutApproach() {
    const reducedMotion = useReducedMotion();

    return (
        <section className="about-approach section">
            <div className="container">
                <div className="approach-header">
                    <div>
                        <span className="approach-kicker">
                            OUR APPROACH
                        </span>

                        <h2>
                            Good decisions start
                            <br />
                            with <span>identification.</span>
                        </h2>
                    </div>

                    <p>
                        Understanding what may be causing the problem helps create a
                        clearer conversation about treatment and prevention.
                    </p>
                </div>

                <div className="approach-grid">
                    {items.map(
                        ({ number, icon: Icon, title, copy }, index) => (
                            <motion.article
                                key={number}
                                initial={
                                    reducedMotion
                                        ? false
                                        : { opacity: 0, y: 25 }
                                }
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: reducedMotion ? 0 : 0.55,
                                    delay: reducedMotion ? 0 : index * 0.1,
                                }}
                            >
                                <span className="approach-number">
                                    {number}
                                </span>

                                <div className="approach-icon">
                                    <Icon size={34} strokeWidth={1.6} />
                                </div>

                                <h3>{title}</h3>

                                <p>{copy}</p>

                                {index < items.length - 1 && (
                                    <span className="approach-arrow">
                                        <ArrowRight size={19} />
                                    </span>
                                )}
                            </motion.article>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
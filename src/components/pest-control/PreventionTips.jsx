import { motion, useReducedMotion } from "framer-motion";
import {
    Check,
    Droplets,
    Home,
    PackageCheck,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import "./PreventionTips.css";

const tips = [
    {
        icon: PackageCheck,
        number: "01",
        title: "Store food carefully",
        copy: "Keep food and pantry goods in properly closed containers when practical.",
    },
    {
        icon: Droplets,
        number: "02",
        title: "Watch moisture",
        copy: "Address standing water, leaks, and other persistent moisture around the home.",
    },
    {
        icon: Home,
        number: "03",
        title: "Check entry points",
        copy: "Maintain screens and look for accessible gaps around common entry areas.",
    },
    {
        icon: Sparkles,
        number: "04",
        title: "Reduce attractants",
        copy: "Regular cleaning and proper waste storage may help make areas less attractive to pests.",
    },
];

export default function PreventionTips() {
    const reduced = useReducedMotion();

    return (
        <section className="prevention-section">
            <div className="prevention-glow" />

            <div className="container">
                <div className="prevention-header">
                    <div>
                        <span className="prevention-eyebrow">
                            <ShieldCheck size={16} />
                            PRACTICAL PREVENTION
                        </span>

                        <h2>
                            Small habits can make
                            <br />
                            <em>a difference.</em>
                        </h2>
                    </div>

                    <p>
                        Pest prevention often starts with simple steps around the
                        home that can help reduce food, water, shelter, and
                        accessible entry points.
                    </p>
                </div>

                <div className="prevention-grid">
                    {tips.map(({ icon: Icon, number, title, copy }, index) => (
                        <motion.article
                            key={title}
                            initial={reduced ? false : { opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: reduced ? 0 : 0.5,
                                delay: reduced ? 0 : index * 0.07,
                            }}
                        >
                            <span className="prevention-number">
                                {number}
                            </span>

                            <div className="prevention-icon">
                                <Icon size={33} strokeWidth={1.6} />
                            </div>

                            <h3>{title}</h3>

                            <p>{copy}</p>

                            <span className="prevention-check">
                                <Check size={14} strokeWidth={3} />
                            </span>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
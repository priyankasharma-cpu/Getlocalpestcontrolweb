import { motion, useReducedMotion } from "framer-motion";
import {
    Bug,
    Check,
    MapPin,
    Search,
    ShieldCheck,
} from "lucide-react";

import "./PestOverview.css";

const items = [
    {
        icon: Search,
        title: "Identify",
        copy: "Understand the pest species and the signs you’re seeing.",
    },
    {
        icon: MapPin,
        title: "Locate",
        copy: "Look at where activity is occurring around the home.",
    },
    {
        icon: ShieldCheck,
        title: "Plan",
        copy: "Discuss an appropriate treatment and follow-up approach.",
    },
];

export default function PestOverview() {
    const reduced = useReducedMotion();

    return (
        <section className="pest-overview section">
            <div className="container">
                <div className="pest-overview-header">
                    <div>
                        <span className="pest-section-tag">
                            <Bug size={15} />
                            UNDERSTAND THE PROBLEM
                        </span>

                        <h2>
                            Every pest problem starts
                            <br />
                            with a <em>closer look.</em>
                        </h2>
                    </div>

                    <p>
                        Pest control begins with identification, an assessment of
                        activity, and a treatment approach suited to the situation
                        in your home.
                    </p>
                </div>

                <div className="pest-overview-grid">
                    {items.map(({ icon: Icon, title, copy }, index) => (
                        <motion.article
                            key={title}
                            initial={reduced ? false : { opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: reduced ? 0 : 0.5,
                                delay: reduced ? 0 : index * 0.08,
                            }}
                        >
                            <span className="overview-number">
                                0{index + 1}
                            </span>

                            <div className="overview-icon">
                                <Icon size={31} strokeWidth={1.7} />
                            </div>

                            <h3>{title}</h3>

                            <p>{copy}</p>

                            <div className="overview-check">
                                <Check size={14} />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
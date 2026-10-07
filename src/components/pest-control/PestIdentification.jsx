import { motion, useReducedMotion } from "framer-motion";
import {
    Camera,
    Check,
    MapPin,
    Search,
    ShieldCheck,
} from "lucide-react";

import pestImage from "../../assets/images/pests/general-pest-control.png";
import "./PestIdentification.css";

const points = [
    {
        icon: MapPin,
        title: "Observe where activity occurs",
        copy: "Notice where pests or signs appear most often around your home.",
    },
    {
        icon: Camera,
        title: "Document what you see",
        copy: "Photos of pests or visible signs can make the problem easier to describe.",
    },
    {
        icon: Search,
        title: "Identify before treatment",
        copy: "Different pests may require different approaches, so identification matters.",
    },
];

export default function PestIdentification() {
    const reduced = useReducedMotion();

    return (
        <section className="identification-section">
            <div className="container identification-grid">
                <motion.div
                    className="identification-visual"
                    initial={reduced ? false : { opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: reduced ? 0 : 0.65 }}
                >
                    <div className="identification-image">
                        <img
                            src={pestImage}
                            alt="Pest control professional inspecting a residential property"
                            loading="lazy"
                        />

                        <div className="identification-overlay" />

                        <div className="identification-image-content">
                            <span>
                                <ShieldCheck size={25} />
                            </span>

                            <div>
                                <small>START WITH IDENTIFICATION</small>
                                <strong>
                                    Understand the problem before choosing the next step.
                                </strong>
                            </div>
                        </div>
                    </div>

                    <div className="identification-badge">
                        <Search size={27} />

                        <div>
                            <small>A CLOSER LOOK</small>
                            <strong>Can make a difference</strong>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="identification-content"
                    initial={reduced ? false : { opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: reduced ? 0 : 0.65 }}
                >
                    <span className="identification-eyebrow">
                        WHY IDENTIFICATION MATTERS
                    </span>

                    <h2>
                        Similar-looking pests can behave{" "}
                        <em>very differently.</em>
                    </h2>

                    <p className="identification-lead">
                        Knowing what may be present helps create a clearer
                        conversation about an appropriate treatment approach.
                    </p>

                    <div className="identification-points">
                        {points.map(({ icon: Icon, title, copy }, index) => (
                            <motion.article
                                key={title}
                                initial={reduced ? false : { opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: reduced ? 0 : 0.4,
                                    delay: reduced ? 0 : index * 0.08,
                                }}
                            >
                                <div className="identification-point-icon">
                                    <Icon size={24} />
                                </div>

                                <div>
                                    <h3>
                                        {title}
                                        <Check size={15} />
                                    </h3>

                                    <p>{copy}</p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
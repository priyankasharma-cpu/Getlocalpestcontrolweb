import {
    Bug,
    Eye,
    Home,
    ScanSearch,
    TriangleAlert,
} from "lucide-react";

import "./PestSigns.css";

const signs = [
    {
        icon: Eye,
        title: "Repeated sightings",
        copy: "Seeing pests repeatedly may indicate ongoing activity nearby.",
    },
    {
        icon: Bug,
        title: "Droppings or shed skins",
        copy: "Physical signs can help provide clues about the pest involved.",
    },
    {
        icon: Home,
        title: "Gnawing or wood changes",
        copy: "Damage around wood, walls, stored items, or wiring deserves attention.",
    },
];

export default function PestSigns() {
    return (
        <section className="pest-signs section">
            <div className="container">
                <div className="pest-signs-shell">
                    <div className="pest-signs-heading">
                        <span className="signs-icon">
                            <TriangleAlert size={25} />
                        </span>

                        <div>
                            <span className="signs-eyebrow">
                                KNOW THE WARNING SIGNS
                            </span>

                            <h2>
                                Signs worth
                                <br />
                                <em>paying attention to.</em>
                            </h2>
                        </div>
                    </div>

                    <div className="signs-list">
                        {signs.map(({ icon: Icon, title, copy }, index) => (
                            <article key={title}>
                                <span className="sign-number">
                                    0{index + 1}
                                </span>

                                <div className="sign-icon">
                                    <Icon size={28} />
                                </div>

                                <div>
                                    <h3>{title}</h3>
                                    <p>{copy}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="signs-footer">
                        <ScanSearch size={21} />

                        <p>
                            Not sure what you're seeing? Start by describing
                            the activity and where you noticed it.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
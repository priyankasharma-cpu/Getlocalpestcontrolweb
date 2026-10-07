import {
    ArrowUpRight,
    PhoneCall,
    Radio,
} from "lucide-react";

import { CONTACT_PHONE } from "../../utils/constants";
import "./callbutton2.css";

export default function callbutton2({
    className = "",
    variant = "default",
    label = "Call Now",
}) {
    return (
        <a
            className={`button call call-cta call-cta--${variant} ${className}`}
            href={CONTACT_PHONE.href}
            aria-label={`Call Get Local Pest Control at ${CONTACT_PHONE.display}`}
            title={`Call ${CONTACT_PHONE.display}`}
        >
            {/* Decorative shine */}
            <span className="call-cta__shine" aria-hidden="true" />

            {/* Phone icon */}
            <span className="call-cta__icon-wrap" aria-hidden="true">
                <span className="call-cta__pulse call-cta__pulse--one" />
                <span className="call-cta__pulse call-cta__pulse--two" />

                <span className="call-cta__icon">
                    <PhoneCall size={19} strokeWidth={2.2} />

                    <span className="call-cta__status">
                        <Radio size={7} strokeWidth={3} />
                    </span>
                </span>
            </span>

            {/* Text */}
            <span className="call-cta__content">
                <span className="call-cta__label">
                    <span className="call-cta__live-dot" />
                    {label}
                </span>

                <strong>{CONTACT_PHONE.display}</strong>
            </span>

            {/* Arrow */}
            <span className="call-cta__arrow" aria-hidden="true">
                <ArrowUpRight size={16} strokeWidth={2.2} />
            </span>
        </a>
    );
}
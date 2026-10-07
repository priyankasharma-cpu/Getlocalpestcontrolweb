import { PhoneCall, ArrowUpRight } from "lucide-react";
import { CONTACT_PHONE } from "../../utils/constants";
import "./CallCTA.css";

export default function CallCTA({
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
      {/* Animated phone */}
      <span className="call-cta__icon-wrap" aria-hidden="true">
        <span className="call-cta__ring call-cta__ring--one" />
        <span className="call-cta__ring call-cta__ring--two" />

        <span className="call-cta__icon">
          <PhoneCall size={19} strokeWidth={2.25} />
          <i className="call-cta__status" />
        </span>
      </span>

      {/* Text */}
      <span className="call-cta__content">
        <small>
          <i className="call-cta__live-dot" />
          {label}
        </small>

        <strong>{CONTACT_PHONE.display}</strong>
      </span>

      {/* Only an icon — NOT another CTA */}
      <span className="call-cta__arrow" aria-hidden="true">
        <ArrowUpRight size={15} strokeWidth={2.3} />
      </span>
    </a>
  );
}
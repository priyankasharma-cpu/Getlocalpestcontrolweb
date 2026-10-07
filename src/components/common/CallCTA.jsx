import { Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_DISPLAY, hasPhone } from "../../utils/constants";
import "./CallCTA.css";
export default function CallCTA({ className = "" }) {
  return hasPhone ? (
    <a
      className={"button call " + className}
      href={"tel:" + PHONE_NUMBER.replace(/[\s().-]/g, "")}
      title={PHONE_DISPLAY || "Call Now"}
    >
      <Phone size={17} />
      <span className="call-label">Call Now</span>
    </a>
  ) : (
    <button
      className={"button call " + className}
      type="button"
      aria-disabled="true"
      aria-label="Call Now — phone number not yet available"
      title="Phone number not yet available"
    >
      <Phone size={17} />
      <span className="call-label">Call Now</span>
    </button>
  );
}

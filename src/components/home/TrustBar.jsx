import { MapPin, CalendarDays, SlidersHorizontal, House } from "lucide-react";
import "./TrustBar.css";
export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container">
        {[
          [MapPin, "Local pest help"],
          [CalendarDays, "Convenient scheduling"],
          [SlidersHorizontal, "Treatment options"],
          [House, "Residential pest solutions"],
        ].map(([Icon, t]) => (
          <div key={t}>
            <Icon size={22} />
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

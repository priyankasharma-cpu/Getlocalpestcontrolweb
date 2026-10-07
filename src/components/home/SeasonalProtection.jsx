import { useState } from "react";
import { Flower2, Sun, Leaf, Snowflake } from "lucide-react";
import "./SeasonalProtection.css";
const seasons = [
  [
    "Spring",
    Flower2,
    "A fresh season. A little extra attention.",
    "As weather warms, ants, termites, and mosquitoes may become more active. Check for moisture, inspect screens, and notice changes around your home.",
  ],
  [
    "Summer",
    Sun,
    "Enjoy the outdoors. Know what’s nearby.",
    "Mosquitoes, ticks, and wasps may be more noticeable in warm weather. Reduce standing water and keep outdoor gathering areas tidy.",
  ],
  [
    "Fall",
    Leaf,
    "Cooler days can bring indoor visitors.",
    "Rodents and insects may seek shelter as temperatures drop. Check accessible entry gaps and keep stored food in closed containers.",
  ],
  [
    "Winter",
    Snowflake,
    "Pest activity doesn’t always take a break.",
    "Rodents, cockroaches, and spiders may remain active indoors. Keep an eye on storage areas, moisture, and signs of unwanted visitors.",
  ],
];
export default function SeasonalProtection() {
  const [active, setActive] = useState(0);
  const [name, Icon, title, copy] = seasons[active];
  return (
    <section className="section seasonal">
      <div className="container split">
        <div>
          <span className="eyebrow">A LITTLE AWARENESS, ALL YEAR</span>
          <h2>Pest problems can change with the seasons.</h2>
          <p>
            Your home changes with the weather.
            <br />
            So can the pests around it.
          </p>
          <div className="season-tabs" role="tablist" aria-label="Seasons">
            {seasons.map(([n, I], i) => (
              <button
                key={n}
                id={"season-" + i}
                role="tab"
                aria-selected={active === i}
                aria-controls="season-panel"
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (
                    ["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)
                  ) {
                    e.preventDefault();
                    const next =
                      e.key === "Home"
                        ? 0
                        : e.key === "End"
                          ? 3
                          : (active + (e.key === "ArrowRight" ? 1 : 3)) % 4;
                    setActive(next);
                    document.getElementById("season-" + next)?.focus();
                  }
                }}
              >
                <I size={19} />
                {n}
              </button>
            ))}
          </div>
        </div>
        <div
          id="season-panel"
          className="season-panel"
          role="tabpanel"
          aria-labelledby={"season-" + active}
        >
          <Icon size={58} strokeWidth={1} />
          <span className="eyebrow">{name.toUpperCase()} AT HOME</span>
          <h3>{title}</h3>
          <p>{copy}</p>
          <small>Activity varies by location and conditions.</small>
        </div>
      </div>
    </section>
  );
}

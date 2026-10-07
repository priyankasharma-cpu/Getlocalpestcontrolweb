import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import LeadForm from "./LeadForm";
import "./QuoteModal.css";
export default function QuoteModal({ open, onClose }) {
  const ref = useRef();
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement,
      overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.querySelector("input")?.focus();
    const key = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const items = [
          ...ref.current.querySelectorAll(
            "button:not(:disabled),input,select,textarea,a[href]",
          ),
        ];
        const first = items[0],
          last = items.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", key);
      previous?.focus();
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      className="modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <section
        ref={ref}
        className="quote-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
      >
        <button
          className="icon-button modal-close"
          aria-label="Close quote form"
          onClick={onClose}
        >
          <X />
        </button>
        <span className="eyebrow">LET’S START WITH YOUR HOME</span>
        <h2 id="quote-title">
          A little info.
          <br />A helpful next step.
        </h2>
        <p>Tell us about your pest problem.</p>
        <LeadForm short />
      </section>
    </div>
  );
}

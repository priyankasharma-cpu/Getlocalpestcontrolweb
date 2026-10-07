import { useState } from "react";
import { CheckCircle, LoaderCircle } from "lucide-react";
import { pestServices } from "../../data/pestServices";
import { submitLead } from "../../utils/submitLead";
import "./LeadForm.css";
export default function LeadForm({ short = false }) {
  const [errors, setErrors] = useState({}),
    [status, setStatus] = useState(""),
    [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)),
      next = {};
    for (const f of short
      ? ["name", "phone", "zip", "pest"]
      : ["firstName", "lastName", "phone", "email", "zip", "pest"])
      if (!data[f]?.trim()) next[f] = "Please complete this field.";
    if (data.phone && data.phone.replace(/\D/g, "").length < 10)
      next.phone = "Enter a valid phone number.";
    if (data.zip && !/^\d{5}(-\d{4})?$/.test(data.zip))
      next.zip = "Enter a valid US ZIP code.";
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = "Enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setBusy(true);
    try {
      const result = await submitLead(data);
      setStatus(result.demo ? "demo" : "sent");
    } catch (err) {
      setErrors({ submit: err.message });
    } finally {
      setBusy(false);
    }
  }
  if (status)
    return (
      <div className="confirmation" role="status">
        <CheckCircle size={48} />
        <h3>
          {status === "demo" ? "Your details look good." : "Request received."}
        </h3>
        <p>
          {status === "demo"
            ? "This form is in preview mode. Your details have not been sent or stored, and no appointment has been scheduled."
            : "Your request was sent. This does not confirm an appointment."}
        </p>
        <button className="button primary" onClick={() => setStatus("")}>
          Back to form
        </button>
      </div>
    );
  const field = (name, label, type = "text") => (
    <label key={name}>
      {label}
      <input
        name={name}
        type={type}
        autoComplete={
          {
            name: "name",
            firstName: "given-name",
            lastName: "family-name",
            phone: "tel",
            email: "email",
            zip: "postal-code",
          }[name]
        }
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? name + "-error" : undefined}
      />
      {errors[name] && (
        <span id={name + "-error"} className="error">
          {errors[name]}
        </span>
      )}
    </label>
  );
  return (
    <form onSubmit={submit} noValidate className="lead-form">
      <div className="form-grid">
        {short ? (
          field("name", "Your name")
        ) : (
          <>
            {field("firstName", "First name")}
            {field("lastName", "Last name")}
          </>
        )}
        {field("phone", "Phone", "tel")}
        {!short && field("email", "Email", "email")}
        {field("zip", "ZIP code")}
        <label>
          Pest problem
          <select
            name="pest"
            aria-invalid={!!errors.pest}
            aria-describedby={errors.pest ? "pest-error" : undefined}
          >
            <option value="">Select a pest</option>
            {pestServices.map((p) => (
              <option key={p.slug}>{p.name}</option>
            ))}
            <option>Other / Not sure</option>
          </select>
          {errors.pest && (
            <span id="pest-error" className="error">
              {errors.pest}
            </span>
          )}
        </label>
        {!short && (
          <label className="full">
            Tell us what you’re seeing
            <textarea name="message" rows={4} />
          </label>
        )}
      </div>
      {!import.meta.env.VITE_LEAD_API_URL && (
        <p className="form-note">
          Preview mode: details are checked but not sent or stored.
        </p>
      )}
      {errors.submit && (
        <p role="alert" className="error">
          {errors.submit}
        </p>
      )}
      <button className="button primary full" disabled={busy}>
        {busy ? (
          <>
            <LoaderCircle size={18} />
            Sending…
          </>
        ) : (
          "Request a Free Quote"
        )}
      </button>
      <p className="form-note">
        Read our <a href="/privacy-policy">Privacy Policy</a>. Please do not
        enter sensitive information.
      </p>
    </form>
  );
}

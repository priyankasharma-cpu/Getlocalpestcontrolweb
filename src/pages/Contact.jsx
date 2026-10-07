import LeadForm from "../components/common/LeadForm";
import CallCTA from "../components/common/CallCTA";
import { MapPin, MessageSquare } from "lucide-react";
import { useSEO } from "../utils/seo";
import "../components/contact/ContactForm.css";
export default function Contact() {
  useSEO("Contact", "Tell us about your pest problem.");
  return (
    <section className="section contact-page">
      <div className="container split">
        <div>
          <span className="eyebrow">LET’S TALK ABOUT YOUR HOME</span>
          <h1>
            Small signs.
            <br />
            Worth a conversation.
          </h1>
          <p>
            Tell us what you’ve noticed. You don’t have to know the pest’s name
            to start.
          </p>
          <div className="contact-note">
            <MessageSquare />
            <div>
              <h3>Share a few details</h3>
              <p>
                Where are you seeing activity? How often? A little context
                helps.
              </p>
            </div>
          </div>
          <div className="contact-note">
            <MapPin />
            <div>
              <h3>Start with your ZIP code</h3>
              <p>Availability depends on your location and provider.</p>
            </div>
          </div>
          <CallCTA />
        </div>
        <div className="contact-form-card">
          <h2>Let’s start here.</h2>
          <p>A few details about you and your pest problem.</p>
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

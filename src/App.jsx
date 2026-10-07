import { useState, useCallback } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import QuoteModal from "./components/common/QuoteModal";
import CallCTA from "./components/common/CallCTA";
import CallPopup from "./components/common/CallPopup";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./pages/Home";
import PestControl from "./pages/PestControl";
import PestServiceDetails from "./pages/PestServiceDetails";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

export default function App() {
  const [quote, setQuote] = useState(false);

  const open = useCallback(() => {
    setQuote(true);
  }, []);

  const close = useCallback(() => {
    setQuote(false);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Accessibility */}
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* Header */}
      <Header onQuote={open} />

      {/* Pages */}
      <main id="main">
        <Routes>
          {[
            ["/", Home],
            ["/pest-control", PestControl],
            ["/pest-control/:slug", PestServiceDetails],
            ["/about", About],
            ["/how-it-works", HowItWorks],
            ["/contact", Contact],
            ["/privacy-policy", PrivacyPolicy],
            ["/terms", Terms],
            ["*", NotFound],
          ].map(([path, Page]) => (
            <Route
              key={path}
              path={path}
              element={<Page onQuote={open} />}
            />
          ))}
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA */}
      <div className="mobile-cta">
        <CallCTA variant="sticky" />

        <button
          type="button"
          className="button primary"
          onClick={open}
        >
          Free Quote
        </button>
      </div>

      {/* Site-wide Call Popup - ONLY ONE INSTANCE */}
      <CallPopup />

      {/* Quote Modal */}
      <QuoteModal
        open={quote}
        onClose={close}
      />
    </BrowserRouter>
  );
}
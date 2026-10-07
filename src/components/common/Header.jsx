import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, House, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import logo from "../../assets/logo/logo.png";
import { navigation } from "../../data/navigation";
import {
  getServicesByCategory,
  getCategoryLabel,
  serviceCategories,
} from "../../data/pestServices";
import CallCTA from "./CallCTA";
import ServiceIcon from "./ServiceIcon";
import "./Header.css";
export default function Header({ onQuote }) {
  const [mobile, setMobile] = useState(false),
    [pests, setPests] = useState(false),
    [scrolled, setScrolled] = useState(false);
  const location = useLocation(),
    header = useRef(),
    trigger = useRef(),
    mobileTrigger = useRef(),
    reduced = useReducedMotion();
  useEffect(() => {
    setMobile(false);
    setPests(false);
  }, [location]);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 16);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    const key = (e) => {
      if (e.key === "Escape") {
        if (pests) {
          setPests(false);
          trigger.current?.focus();
        } else if (mobile) {
          setMobile(false);
          mobileTrigger.current?.focus();
        }
      }
    };
    const outside = (e) => {
      if (!header.current?.contains(e.target)) {
        setPests(false);
        setMobile(false);
      }
    };
    document.addEventListener("keydown", key);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("pointerdown", outside);
    };
  }, [pests, mobile]);
  const ordered = serviceCategories.flatMap((category) =>
    getServicesByCategory(category.id),
  );
  const pestMenu = (
    <div
      className="pest-nav"
      key="pests"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPests(false);
      }}
    >
      <button
        ref={trigger}
        className={pests ? "menu-trigger expanded" : "menu-trigger"}
        onClick={() => setPests(!pests)}
        aria-expanded={pests}
        aria-controls="pest-menu"
      >
        Pests
        <ChevronDown size={16} />
      </button>
      <AnimatePresence>
        {pests && (
          <motion.div
            id="pest-menu"
            className="mega-menu"
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: reduced ? 0 : 0.16 }}
          >
            <div className="mega-heading">
              <div>
                <span className="eyebrow">
                  FIND HELP FOR WHAT YOU’RE SEEING
                </span>
                <h2>Pest Control Services</h2>
                <p>
                  Explore pest-control solutions for common household and
                  property pests.
                </p>
              </div>
              <Link className="mega-all" to="/pest-control">
                View all services
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="mega-links">
              {ordered.map((p) => (
                <Link
                  className="mega-item"
                  to={"/pest-control/" + p.slug}
                  key={p.slug}
                >
                  <span className="menu-service-icon">
                    <ServiceIcon name={p.icon} size={21} strokeWidth={1.6} />
                  </span>
                  <span>
                    <strong>{p.serviceName}</strong>
                    <small>{getCategoryLabel(p.category)}</small>
                  </span>
                  <ArrowRight className="menu-arrow" size={16} />
                </Link>
              ))}
            </div>
            <div className="mega-bottom">
              <House size={18} />
              <span>Not sure which pest you’re seeing?</span>
              <Link to="/contact">
                Tell us about the problem
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
  return (
    <header ref={header} className={"header" + (scrolled ? " scrolled" : "")}>
      <div className="utility">
        <div className="container">
          <span>
            <House size={15} />A little local help. A more comfortable home.
          </span>
          <Link to="/contact">Let’s talk about your pest problem</Link>
        </div>
      </div>
      <div className="container header-main">
        <Link to="/" className="logo" aria-label="Get Local Pest Control home">
          <img
            src={logo}
            alt="Get Local Pest Control"
            width="720"
            height="190"
          />
        </Link>
        <nav
          id="main-navigation"
          className={mobile ? "navigation open" : "navigation"}
          aria-label="Main navigation"
        >
          {navigation.map(([label, path]) => (
            <div className="nav-group" key={path}>
              <Link
                className={
                  location.pathname === path ||
                  (path === "/pest-control" &&
                    location.pathname.startsWith("/pest-control/"))
                    ? "active"
                    : ""
                }
                aria-current={location.pathname === path ? "page" : undefined}
                to={path}
              >
                {label}
              </Link>
              {path === "/pest-control" && pestMenu}
            </div>
          ))}
        </nav>
        <div className="header-actions">
          <CallCTA />
          <button className="button primary" onClick={onQuote}>
            Get a Free Quote
          </button>
        </div>
        <button
          ref={mobileTrigger}
          className="icon-button menu-toggle"
          aria-label={mobile ? "Close navigation" : "Open navigation"}
          aria-expanded={mobile}
          aria-controls="main-navigation"
          onClick={() => {
            setMobile(!mobile);
            setPests(false);
          }}
        >
          {mobile ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

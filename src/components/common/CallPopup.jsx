import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
    Check,
    Clock3,
    PhoneCall,
    ShieldCheck,
    X,
} from "lucide-react";

import { CONTACT_PHONE } from "../../utils/constants";
import "./CallPopup.css";

const AUTO_SHOW_MS = 90 * 1000;
const CLOSE_COOLDOWN_MS = 100 * 1000;

const STORAGE_KEYS = {
    closedAt: "glpc_call_popup_closed_at",
    shownAt: "glpc_call_popup_shown_at",
};

export default function CallPopup() {
    const location = useLocation();

    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    const initialRoute = useRef(true);
    const timerRef = useRef(null);

    /* -----------------------------------------
       STORAGE HELPERS
    ----------------------------------------- */

    const getTime = (key) => {
        try {
            return Number(sessionStorage.getItem(key)) || 0;
        } catch {
            return 0;
        }
    };

    const setTime = (key, value) => {
        try {
            sessionStorage.setItem(key, String(value));
        } catch {
            // Popup still works if storage is unavailable.
        }
    };

    /* -----------------------------------------
       ELIGIBILITY
    ----------------------------------------- */

    const canShow = useCallback(() => {
        const now = Date.now();

        const closedAt = getTime(STORAGE_KEYS.closedAt);

        // Most important rule:
        // after manual close, do not disturb for 100 seconds.
        if (closedAt && now - closedAt < CLOSE_COOLDOWN_MS) {
            return false;
        }

        return true;
    }, []);

    /* -----------------------------------------
       SHOW
    ----------------------------------------- */

    const showPopup = useCallback(() => {
        if (!canShow()) return;

        setMounted(true);
        setOpen(true);

        setTime(STORAGE_KEYS.shownAt, Date.now());
    }, [canShow]);

    /* -----------------------------------------
       CLOSE
    ----------------------------------------- */

    const closePopup = useCallback(() => {
        setOpen(false);

        // User explicitly dismissed it.
        // Respect them for at least 100 seconds.
        setTime(STORAGE_KEYS.closedAt, Date.now());

        window.setTimeout(() => {
            setMounted(false);
        }, 280);
    }, []);

    /* -----------------------------------------
       FIRST LOAD / REFRESH
    ----------------------------------------- */

    useEffect(() => {
        const loadTimer = window.setTimeout(() => {
            showPopup();
        }, 650);

        return () => window.clearTimeout(loadTimer);
    }, [showPopup]);

    /* -----------------------------------------
       ROUTE CHANGE
    ----------------------------------------- */

    useEffect(() => {
        if (initialRoute.current) {
            initialRoute.current = false;
            return;
        }

        const routeTimer = window.setTimeout(() => {
            showPopup();
        }, 500);

        return () => window.clearTimeout(routeTimer);
    }, [location.pathname, showPopup]);

    /* -----------------------------------------
       90 SECOND RECURRING CHECK
    ----------------------------------------- */

    useEffect(() => {
        const scheduleNext = () => {
            window.clearTimeout(timerRef.current);

            timerRef.current = window.setTimeout(() => {
                if (!open) {
                    showPopup();
                }

                scheduleNext();
            }, AUTO_SHOW_MS);
        };

        scheduleNext();

        return () => {
            window.clearTimeout(timerRef.current);
        };
    }, [open, showPopup]);

    /* -----------------------------------------
       DESKTOP EXIT INTENT
    ----------------------------------------- */

    useEffect(() => {
        const handleExitIntent = (event) => {
            // User moving toward browser chrome / leaving page.
            if (
                event.clientY <= 5 &&
                !event.relatedTarget &&
                !open
            ) {
                showPopup();
            }
        };

        document.addEventListener("mouseout", handleExitIntent);

        return () => {
            document.removeEventListener(
                "mouseout",
                handleExitIntent
            );
        };
    }, [open, showPopup]);

    /* -----------------------------------------
       ESC KEY
    ----------------------------------------- */

    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closePopup();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [open, closePopup]);

    /* -----------------------------------------
       LOCK PAGE SCROLL
    ----------------------------------------- */

    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);

    if (!mounted) return null;

    return (
        <div
            className={`call-popup ${open ? "is-open" : "is-closing"
                }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="call-popup-title"
        >
            <button
                type="button"
                className="call-popup__backdrop"
                onClick={closePopup}
                aria-label="Close call popup"
            />

            <div className="call-popup__card">
                {/* Close */}
                <button
                    type="button"
                    className="call-popup__close"
                    onClick={closePopup}
                    aria-label="Close"
                >
                    <X size={18} />
                </button>

                {/* Top badge */}
                <div className="call-popup__badge">
                    <span className="call-popup__badge-dot" />
                    NEED HELP WITH A PEST PROBLEM?
                </div>

                {/* Animated phone */}
                <div
                    className="call-popup__phone-wrap"
                    aria-hidden="true"
                >
                    <span className="call-popup__signal signal-one" />
                    <span className="call-popup__signal signal-two" />
                    <span className="call-popup__signal signal-three" />

                    <div className="call-popup__phone">
                        <PhoneCall size={35} strokeWidth={2} />

                        <span className="call-popup__phone-status" />
                    </div>
                </div>

                {/* Content */}
                <div className="call-popup__content">
                    <span className="call-popup__eyebrow">
                        GET LOCAL PEST CONTROL
                    </span>

                    <h2 id="call-popup-title">
                        Let&apos;s talk about
                        <br />
                        your <em>pest problem.</em>
                    </h2>

                    <p>
                        Tell us what you&apos;re seeing and take the
                        next step toward finding pest-control help for
                        your home.
                    </p>
                </div>

                {/* Trust */}
                <div className="call-popup__trust">
                    <span>
                        <i>
                            <ShieldCheck size={14} />
                        </i>
                        Simple next step
                    </span>

                    <span>
                        <i>
                            <Clock3 size={14} />
                        </i>
                        Call directly
                    </span>

                    <span>
                        <i>
                            <Check size={14} />
                        </i>
                        Residential pest help
                    </span>
                </div>

                {/* Main Call Button */}
                <a
                    href={CONTACT_PHONE.href}
                    className="call-popup__cta"
                    aria-label={`Call Get Local Pest Control at ${CONTACT_PHONE.display}`}
                >
                    <span className="call-popup__cta-icon">
                        <PhoneCall size={21} />

                        <span />
                    </span>

                    <span className="call-popup__cta-copy">
                        <small>CALL NOW</small>
                        <strong>{CONTACT_PHONE.display}</strong>
                    </span>

                    <span className="call-popup__cta-arrow">
                        →
                    </span>
                </a>

                <button
                    type="button"
                    className="call-popup__later"
                    onClick={closePopup}
                >
                    Not now, I&apos;ll continue browsing
                </button>

                <div className="call-popup__footer">
                    <ShieldCheck size={13} />
                    <span>
                        Call when you&apos;re ready to discuss your pest
                        concern.
                    </span>
                </div>
            </div>
        </div>
    );
}
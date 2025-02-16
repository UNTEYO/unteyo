// CookiePolicy.jsx
import React, { useState } from "react";
import "./CookiePolicy.css";

const CookiePolicy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  const handleToggle = (type) => {
    if (type === "essential") return; // Essential cookies can't be disabled
    setCookiePreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleSave = () => {
    console.log("Saving preferences:", cookiePreferences);
    setShowBanner(false);
    setIsOpen(false);
    // Here you would typically save preferences to localStorage or backend
  };

  const handleAcceptAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
    setShowBanner(false);
    console.log("Accepted all cookies");
  };

  return (
    <div className="cookie-container">

      <div className="cookie-card">
        <div className="cookie-header">
          <h1>Cookie Settings</h1>
          <button
            type="button"
            className={`accordion-toggle ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="arrow"></span>
          </button>
        </div>

        <div className={`cookie-content ${isOpen ? "open" : ""}`}>
          {/* Essential Cookies */}
          <div className="cookie-section">
            <div className="cookie-section-header">
              <div className="cookie-icon essential-icon"></div>
              <div className="cookie-section-title">
                <h2>Essential Cookies</h2>
                <label className="toggle-switch disabled">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.essential}
                    onChange={() => handleToggle("essential")}
                    disabled
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            <p>
              These cookies are necessary for the website to function and cannot
              be disabled.
            </p>
          </div>

          {/* Analytics Cookies */}
          <div className="cookie-section">
            <div className="cookie-section-header">
              <div className="cookie-icon analytics-icon"></div>
              <div className="cookie-section-title">
                <h2>Analytics Cookies</h2>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.analytics}
                    onChange={() => handleToggle("analytics")}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            <p>
              Help us understand how visitors interact with our website by
              collecting and reporting information anonymously.
            </p>
          </div>

          {/* Marketing Cookies */}
          <div className="cookie-section">
            <div className="cookie-section-header">
              <div className="cookie-icon marketing-icon"></div>
              <div className="cookie-section-title">
                <h2>Marketing Cookies</h2>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.marketing}
                    onChange={() => handleToggle("marketing")}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            <p>
              Used to track visitors across websites to display relevant
              advertisements.
            </p>
          </div>

          <div className="cookie-actions">
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;

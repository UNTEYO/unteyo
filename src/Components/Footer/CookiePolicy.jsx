import React, { useState } from 'react';
import './CookiePolicy.css';

const CookiePolicy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cookie-policy-container">
      <h1 className="cookie-policy-title">Cookie Policy</h1>
      <p className="cookie-policy-intro">
        We use cookies to enhance your experience on our website. By continuing to browse, you agree to our use of cookies.
      </p>

      <div className="accordion">
        <button className="accordion-header" onClick={toggleAccordion}>
          <span>What are cookies?</span>
          <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>▼</span>
        </button>
        <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.
          </p>
        </div>
      </div>

      <div className="cookie-settings">
        <h2>Cookie Settings</h2>
        <div className="toggle-switch">
          <label>
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <span>Enable Essential Cookies</span>
        </div>
        <div className="toggle-switch">
          <label>
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <span>Enable Analytics Cookies</span>
        </div>
        <div className="toggle-switch">
          <label>
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <span>Enable Marketing Cookies</span>
        </div>
      </div>

      <button className="save-button">Save Preferences</button>
    </div>
  );
};

export default CookiePolicy;
import React, { useState } from "react";
import { handleResponsive } from "../../../handleResponsive";


const EmailInput = () => {
  const [email, setEmail] = useState("");
  const { windowWidth, tampilanMobile } = handleResponsive();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleButtonClick = () => {
    console.log("Button clicked with email:", email);
  };

  return (
    <div
      className={`input-container ${
        tampilanMobile ? "mobile-input-container" : "input-container"
      }`}
    >
      <div
        className={`input-wrapper ${
          tampilanMobile ? "mobile-input-wrapper" : "input-wrapper"
        }`}
      >
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="nama@email.com"
          className={`email-input ${
            tampilanMobile ? "mobile-email-input" : "email-input"
          }`}
        />
        <button
          className={`circle-button ${
            tampilanMobile ? "mobile-circle-button" : "circle-button"
          }`}
          onClick={handleButtonClick}
          aria-label="Submit email"
        />
      </div>
    </div>
  );
};

export default EmailInput;

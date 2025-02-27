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
      className="input-container"
    >
      <div
        className="input-wrapper"
      >
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="nama@email.com"
          className="email-input"
        />
        <button
          className="circle-button"
          onClick={handleButtonClick}
          aria-label="Submit email"
        />
      </div>
    </div>
  );
};

export default EmailInput;

import React from "react";
import "./Landing.css";
import WaveDot from "./WaveDot";

function Landing() {
  return (
    <>
      <div className="containerLanding">
        <WaveDot />
        <div className="content-container">
          <h1 className="judulLanding">Unteyo Journey</h1>
          <h2 className="judulLanding2">Greeting Quality Students</h2>
          <h4 className="tagLanding">#BeWise</h4>
        </div>
      </div>
    </>
  );
}

export default Landing;

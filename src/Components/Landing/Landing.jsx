import React from "react";
import "./Landing.css";
import WaveDot from "./WaveDot";
import Wave3 from "./Wave3";

function Landing() {
  return (
    <>
      <div className="containerLanding">
        <Wave3 />
        <div className="content-container">
          <h1 className="judulLanding">Unteyo Journey</h1>
          <h2 className="judulLanding2">Greeting Quality Students</h2>
          <button className="btnLanding">Explore Our Journey</button>
          <h4 className="tagLanding">#BeWise</h4>
        </div>
      </div>
    </>
  );
}

export default Landing;

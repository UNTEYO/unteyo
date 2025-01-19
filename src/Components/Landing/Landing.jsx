import React, { useEffect } from "react";
import "./Landing.css";
import WaveDot from "./WaveDot";
import {handleResponsive} from "../../handleResponsive"
import Wave3 from "./Wave3";

function Landing() {
  const {windowWidth, tampilanMobile} = handleResponsive()

  useEffect(() => {
    console.log(`Lebar sekarang: ${windowWidth}`); 
    console.log(`Tampilan mobile: ${tampilanMobile}`);
  }, [windowWidth, tampilanMobile])

  return (
    <>
      <div className="containerLanding">
        <WaveDot></WaveDot>
        <div className="content-container">
          <h1 className={`judulLanding ${
            tampilanMobile ? "mobile-judulLanding" : "judulLanding"
          }`}>Unteyo Journey</h1>
          <h2 className={`judulLanding2 ${
            tampilanMobile ? "mobile-judulLanding2" : "judulLanding2"
          }`}>Greeting Quality Students</h2>
          <button className={`btnLanding ${
            tampilanMobile ? "mobile-btnLanding" : "btnLanding"
          }`}>Explore Our Journey</button>
          <h4 className={`tagLanding ${
            tampilanMobile ? "mobile-tagLanding" : "tagLanding"
          }`}>#BeWise</h4>
        </div>
      </div>
    </>
  );
}

export default Landing;

import React, {useEffect} from "react";
import { handleResponsive } from "../../handleResponsive";
import Like from "../../assets/like.png";
import Love from "../../assets/love.png";
import Spiral from "../../assets/spiral.png";
import Spray1 from "../../assets/spray 1.png";
import Spray2 from "../../assets/spray 2.png";
import Spray3 from "../../assets/spray 3.png";
import "./Decor.css";

function Decor() {
   const { windowWidth, tampilanMobile } = handleResponsive();
  
    useEffect(() => {
      console.log(`Lebar sekarang: ${windowWidth}`);
      console.log(`Tampilan mobile: ${tampilanMobile}`);
    }, [windowWidth, tampilanMobile]);

  return (
    <div>
      <img src={Like} className={`likeDecor ${
        tampilanMobile ? "mobile-likeDecor" : "likeDecor"
      }`}></img>
      <img src={Love} className={`loveDecor ${
        tampilanMobile ? "mobile-loveDecor" : "loveDecor"
      }`}></img>
      {/* <img src={Spiral} className='spiralDecor'></img> */}
      <div className={`sprayDecor1 ${
        tampilanMobile ? "mobile-sprayDecor1" : "sprayDecor1"
      }`}></div>
      <div className={`sprayDecor1-1 ${
        tampilanMobile ? "mobile-sprayDecor1-1" : "sprayDecor1-1"
      }`}></div>
      <div className={`sprayDecor2 ${
        tampilanMobile ? "mobile-sprayDecor2" : "sprayDecor2"
      }`}></div>
      <div className={`sprayDecor2-2 ${
        tampilanMobile ? "mobile-sprayDecor2-2" : "sprayDecor2-2"
      }`}></div>
      <div className="sprayDecor2-2-2"></div>
      <div className={`sprayDecor3 ${
        tampilanMobile ? "mobile-sprayDecor3" : "sprayDecor3"
      }`}></div>
      {/* <img src={Spray1} className='spray1Decor'></img>
      <img src={Spray2} className='spray2Decor'></img>
      <img src={Spray3} className='spray3Decor'></img> */}
    </div>
  );
}

export default Decor;

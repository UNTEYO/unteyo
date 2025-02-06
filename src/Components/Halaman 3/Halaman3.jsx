import React, { useEffect } from "react";
import { handleResponsive } from "../../handleResponsive";
import Carousel from "./Carousel/Card/Carousel";
import "./Halaman3.css";

function Halaman3() {
  const { windowWidth, tampilanMobile } = handleResponsive();

  useEffect(() => {
    console.log(`Lebar sekarang: ${windowWidth}`);
    console.log(`Tampilan mobile: ${tampilanMobile}`);
  }, [windowWidth, tampilanMobile]);

  return (
    <div
      className={`backgroundHalaman3 ${
        tampilanMobile ? "mobile-backgroundHalaman3" : "backgroundHalaman3"
      }`}
    >
      <div
        id="product"
        className={`containerHalaman3 ${
          tampilanMobile ? "mobile-containerHalaman3" : "containerHalaman3"
        }`}
      >
        <h2
          className={`judulHalaman3 ${
            tampilanMobile ? "mobile-judulHalaman3" : "judulHalaman3"
          }`}
        >
          Past Events
        </h2>
        <Carousel></Carousel>
      </div>
    </div>
  );
}

export default Halaman3;

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Cards.css"
import { handleResponsive } from "../../handleResponsive";
import Cards from "./Card"

import "./Halaman3.css";

function Halaman3() {
  const { windowWidth, tampilanMobile } = handleResponsive();
  const [hoveredCardId, setHoveredCardId] = useState(null);

  useEffect(() => {
    console.log(`Lebar sekarang: ${windowWidth}`);
    console.log(`Tampilan mobile: ${tampilanMobile}`);
  }, [windowWidth, tampilanMobile]);

  useEffect(()=> {
    const Cards = document.querySelectorAll(".card")

    if (Cards[0]) {
      Cards[0].style.animationDelay = `${(30 / 5) * (5 - 1) * -1}s`
  }
  if (Cards[1]) {
      Cards[1].style.animationDelay = `${(30 / 5) * (5 - 2) * -1}s`
  }
  if (Cards[2]) {
      Cards[2].style.animationDelay = `${(30 / 5) * (5 - 3) * -1}s`
  }
  if (Cards[3]) {
      Cards[3].style.animationDelay = `${(30 / 5) * (5 - 4) * -1}s`
  }
  if (Cards[4]) {
      Cards[4].style.animationDelay = `${(30 / 5) * (5 - 5) * -1}s`
  }
  })
  
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
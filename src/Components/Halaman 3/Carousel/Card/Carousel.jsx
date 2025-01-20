import React, { useEffect } from "react";
import { handleResponsive } from "../../../../handleResponsive";
import Card from "./Card";
import TaketheTrash from "../../../../assets/takethetrash.png";
import "./Carousel.css";

function Carousel() {
  const { windowWidth, tampilanMobile } = handleResponsive();

  useEffect(() => {
    console.log(`Lebar sekarang: ${windowWidth}`);
    console.log(`Tampilan mobile: ${tampilanMobile}`);
  }, [windowWidth, tampilanMobile]);

  return (
    <div>
      <Card
        img={TaketheTrash}
        judul="cobas"
        date1="12"
        date2="12"
        loc1="solo"
        loc2="jogja"
        link="bla"
      ></Card>
    </div>
  );
}

export default Carousel;

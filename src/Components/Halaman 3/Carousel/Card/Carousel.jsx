import React, { useEffect } from "react";
import { handleResponsive } from "../../../../handleResponsive";
import Card from "./Card";
import TaketheTrash from "../../../../assets/takethetrash.png";
import Pilmapres from "../../../../assets/pilmapres.png"
import "./Carousel.css";

function Carousel() {
  const { windowWidth, tampilanMobile } = handleResponsive();

  useEffect(() => {
    console.log(`Lebar sekarang: ${windowWidth}`);
    console.log(`Tampilan mobile: ${tampilanMobile}`);
  }, [windowWidth, tampilanMobile]);

  // const handleHover = (id) => {
  //   const infocard = document.querySelector(`.infocard-${id}`);
  //   if (infocard) {
  //     infocard.style.opacity = "1";
  //     infocard.style.transition = "0.5s";
  //   }
  // };

  // const handleMouseOut = (id) => {
  //   const infocard = document.querySelector(`.infocard-${id}`);
  //   if (infocard) {
  //     infocard.style.opacity = "0";
  //     infocard.style.transition = "0.5s";
  //   }
  // };
  

  return (
    <div className={`carouselHalaman3 ${
      tampilanMobile ? "mobile-carouselHalaman3" : "carouselHalaman3"
    }`}>
      <Card
        id="1"
        img={TaketheTrash}
        judul="Take the Trash:Kampus Bersih Mulai Dari Kita"
        date1="Date"
        date2="DEC 7 2024"
        loc1="Location"
        loc2="Taman Kampus 1 UTY"
        link="bla"
      ></Card>
      <Card
        id = "2"
        img={Pilmapres}
        judul="Story of Pilmapres: Menjadi Mahasiswa Berprestasi Utama"
        date1="Date"
        date2="DEC 16 2024"
        loc1="Location"
        loc2="Taman Kampus 1 UTY"
        link="bi"
      ></Card>
    </div>
  );
}

export default Carousel;

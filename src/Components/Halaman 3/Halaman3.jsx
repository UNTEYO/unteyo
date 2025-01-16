import React, {useEffect} from 'react'
import { useState } from 'react'
import {handleResponsive} from "../../handleResponsive"
import Card1 from './Card/Card1'
import "./Halaman3.css"

function Halaman3() {
  const {windowWidth, tampilanMobile} = handleResponsive()
  
    useEffect(() => {
      console.log(`Lebar sekarang: ${windowWidth}`); 
      console.log(`Tampilan mobile: ${tampilanMobile}`);
    }, [windowWidth, tampilanMobile])

    const mobileCarousel_store = [
     <Card1></Card1>
    ]

  // function OnHover1 (){
  //   const ImgCard1 = document.querySelector(".imgcard1Halaman3")
  //   ImgCard1.classList.add("imgcard1Halaman3Hover");
  //   const InfoCard = document.querySelector(".infocard1")
  //   InfoCard.style.display = "flex";
  //   InfoCard.style.opacity = "1"
  //   console.log("Mouse over: class added");
  // }

  // function OutHover1() {
  //   const Imgcard1 = document.querySelector(".imgcard1Halaman3");
  //   const InfoCard = document.querySelector(".infocard1")

  //   if (Imgcard1.classList.contains("imgcard1Halaman3Hover")) {
  //     Imgcard1.classList.remove("imgcard1Halaman3Hover");
  //     InfoCard.style.opacity = "0"
  //     console.log("Mouse out: class removed, info displayed")
  //   }
  //   else {
  //     Imgcard1.classList.add("imgcard1Halaman3Hover");
  //     InfoCard.style.opacity = "1"
  //     console.log("Mouse out: class added, info hidden")
  //   }
  // }

  // function OnHover2 (){
  //   const ImgCard1 = document.querySelector(".imgcard2Halaman3")
  //   ImgCard1.classList.add("imgcard2Halaman3Hover");
  //   const InfoCard = document.querySelector(".infocard2")
  //   InfoCard.style.opacity = "1"
  //   console.log("Mouse over: class added");
  // }

  // function OutHover2() {
  //   const Imgcard1 = document.querySelector(".imgcard2Halaman3");
  //   const InfoCard = document.querySelector(".infocard2")

  //   if (Imgcard1.classList.contains("imgcard2Halaman3Hover")) {
  //     Imgcard1.classList.remove("imgcard2Halaman3Hover");
  //     InfoCard.style.opacity = "0"
  //     console.log("Mouse out: class removed, info displayed")
  //   }
  //   else {
  //     Imgcard1.classList.add("imgcard2Halaman3Hover");
  //     InfoCard.style.opacity = "1"
  //     console.log("Mouse out: class added, info hidden")
  //   }
  // }

  // function OnHover3 (){
  //   const ImgCard1 = document.querySelector(".imgcard3Halaman3")
  //   ImgCard1.classList.add("imgcard3Halaman3Hover");
  //   const InfoCard = document.querySelector(".infocard3")
  //   InfoCard.style.opacity = "1"
  //   console.log("Mouse over: class added");
  // }

  // function OutHover3() {
  //   const Imgcard1 = document.querySelector(".imgcard3Halaman3");
  //   const InfoCard = document.querySelector(".infocard3")

  //   if (Imgcard1.classList.contains("imgcard3Halaman3Hover")) {
  //     Imgcard1.classList.remove("imgcard3Halaman3Hover");
  //     InfoCard.style.opacity = "0"
  //     console.log("Mouse out: class removed, info displayed")
  //   }
  //   else {
  //     Imgcard1.classList.add("imgcard3Halaman3Hover");
  //     InfoCard.style.opacity = "1"
  //     console.log("Mouse out: class added, info hidden")
  //   }
  // }

  // const mobileCarousel_index = () => {
  //   const [currentIndex, setCurrentIndex] = useState(0);
  // }

  // const handlePrevious = () => {
  //   setCurrentIndex((prevIndex) => 
  //     prevIndex === 0 ? posters.length - 1 : prevIndex - 1
  //   );
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => 
  //     prevIndex === posters.length - 1 ? 0 : prevIndex + 1
  //   );
  // };


  
  return (
    <div className='backgroundHalaman3'>
        <main className='containerHalaman3'>
          <h2 className={`judulHalaman3 ${
            tampilanMobile ? "mobile-judulHalaman3" : "judulHalaman3"
          }`}>Ongoing and Upcoming Events</h2>
          <section className={`isiHalaman3 ${
            tampilanMobile ? "mobile-isiHalaman3" : "isiHalaman3"
          }`}>
            <div className={`carouselHalaman3 ${
              tampilanMobile ? "mobile-carouselHalaman3" : "carouselHalaman3"
            }`}>
              {mobileCarousel_store[0]}
            </div>
          </section>
        </main>
    </div>
  )
}

export default Halaman3
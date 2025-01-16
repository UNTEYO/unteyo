import React, {useEffect} from 'react'
import { useState } from 'react'
import TaketheTrash from "../../assets/takethetrash.png"
import Pilmapres from "../../assets/pilmapres.png"
import PersonalBranding from "../../assets/personalbranding.png"
import Info1hal3 from "./Info1hal3"
import Info2hal3 from './Info2hal3'
import Info3hal3 from './Info3hal3'
import {handleResponsive} from "../../handleResponsive"
import "./Halaman3.css"

function Halaman3() {
  const {windowWidth, tampilanMobile} = handleResponsive()
  
    useEffect(() => {
      console.log(`Lebar sekarang: ${windowWidth}`); 
      console.log(`Tampilan mobile: ${tampilanMobile}`);
    }, [windowWidth, tampilanMobile])

    const mobileCarousel_store = [
      <Info1hal3></Info1hal3>,
      <Info2hal3></Info2hal3>,
      <Info3hal3></Info3hal3>
    ]

  function OnHover1 (){
    const ImgCard1 = document.querySelector(".imgcard1Halaman3")
    ImgCard1.classList.add("imgcard1Halaman3Hover");
    const InfoCard = document.querySelector(".infocard1")
    InfoCard.style.display = "flex";
    InfoCard.style.opacity = "1"
    console.log("Mouse over: class added");
  }

  function OutHover1() {
    const Imgcard1 = document.querySelector(".imgcard1Halaman3");
    const InfoCard = document.querySelector(".infocard1")

    if (Imgcard1.classList.contains("imgcard1Halaman3Hover")) {
      Imgcard1.classList.remove("imgcard1Halaman3Hover");
      InfoCard.style.opacity = "0"
      console.log("Mouse out: class removed, info displayed")
    }
    else {
      Imgcard1.classList.add("imgcard1Halaman3Hover");
      InfoCard.style.opacity = "1"
      console.log("Mouse out: class added, info hidden")
    }
  }

  function OnHover2 (){
    const ImgCard1 = document.querySelector(".imgcard2Halaman3")
    ImgCard1.classList.add("imgcard2Halaman3Hover");
    const InfoCard = document.querySelector(".infocard2")
    InfoCard.style.opacity = "1"
    console.log("Mouse over: class added");
  }

  function OutHover2() {
    const Imgcard1 = document.querySelector(".imgcard2Halaman3");
    const InfoCard = document.querySelector(".infocard2")

    if (Imgcard1.classList.contains("imgcard2Halaman3Hover")) {
      Imgcard1.classList.remove("imgcard2Halaman3Hover");
      InfoCard.style.opacity = "0"
      console.log("Mouse out: class removed, info displayed")
    }
    else {
      Imgcard1.classList.add("imgcard2Halaman3Hover");
      InfoCard.style.opacity = "1"
      console.log("Mouse out: class added, info hidden")
    }
  }

  function OnHover3 (){
    const ImgCard1 = document.querySelector(".imgcard3Halaman3")
    ImgCard1.classList.add("imgcard3Halaman3Hover");
    const InfoCard = document.querySelector(".infocard3")
    InfoCard.style.opacity = "1"
    console.log("Mouse over: class added");
  }

  function OutHover3() {
    const Imgcard1 = document.querySelector(".imgcard3Halaman3");
    const InfoCard = document.querySelector(".infocard3")

    if (Imgcard1.classList.contains("imgcard3Halaman3Hover")) {
      Imgcard1.classList.remove("imgcard3Halaman3Hover");
      InfoCard.style.opacity = "0"
      console.log("Mouse out: class removed, info displayed")
    }
    else {
      Imgcard1.classList.add("imgcard3Halaman3Hover");
      InfoCard.style.opacity = "1"
      console.log("Mouse out: class added, info hidden")
    }
  }

  const mobileCarousel_index = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? posters.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === posters.length - 1 ? 0 : prevIndex + 1
    );
  };


  
  return (
    <div className='backgroundHalaman3'>
        <main className='containerHalaman3'>
          <h2 className={`judulHalaman3 ${
            tampilanMobile ? "mobile-judulHalaman3" : "judulHalaman3"
          }`}>Ongoing and Upcoming Events</h2>
          <section className={`containercardHalaman3 ${
            tampilanMobile ? "mobile-containercardHalaman3" : "containercardHalaman3"
          }`} >
            <div className='containercard1Halaman3' onMouseOut={OutHover1} onMouseOver={OnHover1}>
              <img className='imgcard1Halaman3' src={TaketheTrash}></img>
              <Info1hal3></Info1hal3>
            </div>
            <div className='containercard2Halaman3' onMouseOut={OutHover2} onMouseOver={OnHover2}>
              <img className='imgcard2Halaman3' src={Pilmapres}></img>
              <Info2hal3></Info2hal3>
            </div>
            <div className='containercard3Halaman3' onMouseOut={OutHover3} onMouseOver={OnHover3}>
              <img className='imgcard3Halaman3'src={PersonalBranding}></img>
              <Info3hal3></Info3hal3>
            </div>
            <div className={`carouselHalaman3 ${
              tampilanMobile ? "mobile-carouselHalaman3" : "carouselHalaman3"
            }`}>
              <div>
                {mobileCarousel_store[1]}
              </div>
            </div>
          </section>
        </main>
    </div>
  )
}

export default Halaman3
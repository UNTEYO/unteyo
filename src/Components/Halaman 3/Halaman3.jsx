import React from 'react'
import TaketheTrash from "../../assets/takethetrash.png"
import Pilmapres from "../../assets/pilmapres.png"
import PersonalBranding from "../../assets/personalbranding.png"
import Info1hal3 from "./Info1hal3"
import "./Halaman3.css"

function Halaman3() {

  function OnHover1 (){
    const ImgCard1 = document.querySelector(".imgcard1Halaman3")
    ImgCard1.classList.add("imgcard1Halaman3Hover");
    const InfoCard = document.querySelector(".infocard")
    InfoCard.style.display = "flex";
    InfoCard.style.opacity = "1"
    console.log("Mouse over: class added");
  }

  function OutHover1() {
    const Imgcard1 = document.querySelector(".imgcard1Halaman3");
    const InfoCard = document.querySelector(".infocard")

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

  return (
    <div className='backgroundHalaman3'>
        <main className='containerHalaman3'>
          <h2 className='judulHalaman3'>Ongoing and Upcoming Events</h2>
          <section className='containercardHalaman3' >
            <div className='containercard1Halaman3' onMouseOut={OutHover1} onMouseOver={OnHover1}>
              <img className='imgcard1Halaman3' src={TaketheTrash}></img>
              <Info1hal3></Info1hal3>
            </div>
            <div className='containercard2Halaman3'>
              <img className='imgcard2Halaman3' src={Pilmapres}></img>
            </div>
            <div className='containercard3Halaman3'>
              <img className='imgcard3Halaman3'src={PersonalBranding}></img>
            </div>
          </section>
        </main>
    </div>
  )
}

export default Halaman3
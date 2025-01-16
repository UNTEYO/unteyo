import React, { useEffect } from 'react'
import { handleResponsive } from '../../../handleResponsive'
import imgTaketheTrash from "../../../assets/takethetrash.png"
import "./Card.css"

function Card1() {
 const {windowWidth, tampilanMobile} = handleResponsive()
  
    useEffect(() => {
      console.log(`Lebar sekarang: ${windowWidth}`); 
      console.log(`Tampilan mobile: ${tampilanMobile}`);
    }, [windowWidth, tampilanMobile])

    function Onhover () {
      // const Imgcard = document.querySelector(".imgcardHalaman3")
      // Imgcard.classList.add("imgcardHalaman3hover")
      // const Infocard = documnet.querySelector(".infocardHalaman3")
      // Infocard.style.display = "flex"
      // Infocard.style.opacity = "1"
      console.log("kontolllll")
    }
  
  return (
    <div className={`cardHalaman3 ${
      tampilanMobile ? "mobile-cardHalaman3" : "cardHalaman3"
    }`}>
        <img src={imgTaketheTrash}
        className={`imgcardHalaman3 ${
          tampilanMobile ? "mobile-imgcardHalaman3" : "imgcardHalaman3"
        }`} onClick={Onhover}></img>
        <div className={`infocardHalaman3 ${
          tampilanMobile ? "mobile-infocardHalaman3" : "infocardHalamn3"
        }`}>
          <section className={`isiinfocardHalaman3 ${
            tampilanMobile ? "mobile-isiinfoCardHalaman3" : "isiinfocardHalaman3"
          }`}>
            <h2>
              Take The Trash: Kampus Bersih Mulai Dari Kita
            </h2>
            <div className={`dateloc ${
              tampilanMobile ? "mobile-dateloc" : "dateloc"
            }`}>
              <h3>Date</h3>
              <h3>Location</h3>
              <p>DEC 7 2024</p>
              <p>Taman Kampus 1 UTY</p>
            </div>
            <button className={`btninfo ${
              tampilanMobile ? "mobile-btninfo" : "btninfo"
            }`}>
              Buy Now
            </button>
          </section>
        </div>
    </div>
  )
}

export default Card1
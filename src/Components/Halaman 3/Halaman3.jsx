import React from 'react'
import TaketheTrash from "../../assets/takethetrash.png"
import Pilmapres from "../../assets/pilmapres.png"
import PersonalBranding from "../../assets/personalbranding.png"
import ArrowRight from "../../assets/arrow-right.svg"

import "./Halaman3.css"

function Halaman3() {

  // function InfoHover() {
  //   const Infobg = document.querySelector(".infocardbg")
  //   const Info = document.querySelector(".infocard")

  //   if (Infobg.style.display === "none") {
  //     Info.style.display = "flex"
  //     Infobg.style.display = "flex"
  //   }
  //   else {
  //     Info.style.display = "none"
  //     Infobg.stytle.display = "none"
  //   }
  // }

  return (
    <div className='backgroundHalaman3'>
        <main className='containerHalaman3'>
          <h2 className='judulHalaman3'>Ongoing and Upcoming Events</h2>
          <section className='containercardHalaman3' >
            <div className='containercard1Halaman3'>
              <img className='imgcard1Halaman3' src={TaketheTrash}></img>
              <div className='infocardbg'></div>
              <div className='infocard'>
                <h3>
                  Take the Trash: Kampus Bersih Mulai Dari Kita
                </h3>
                <div className='DateLoc'>
                  <div className='date'>
                    <h4>
                      Date
                    </h4>
                    <p>
                      December 7, 2024
                    </p>
                  </div>
                  <div className='loc'>
                    <h4>
                      Location
                    </h4>
                    <p>
                      Taman Kampus 1 UTY
                    </p>
                  </div>
                </div>
                <button>Buy Now</button>
              </div>
            </div>
            <div className='containercard1Halaman3'>
              <img className='imgcard1Halaman3' src={Pilmapres}></img>
            </div>
            <div className='containercard1Halaman3'>
              <img className='imgcard1Halaman3'src={PersonalBranding}></img>
            </div>
          </section>
        </main>
    </div>
  )
}

export default Halaman3
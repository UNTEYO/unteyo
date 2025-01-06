import React from 'react'
import TaketheTrash from "../../assets/takethetrash.png"
import Pilmapres from "../../assets/pilmapres.png"
import PersonalBranding from "../../assets/personalbranding.png"
import ArrowRight from "../../assets/arrow-right.svg"

import "./Halaman3.css"

function Halaman3() {
  return (
    <div className='backgroundHalaman3'>
        <main className='containerHalaman3'>
          <h2 className='judulHalaman3'>Ongoing and Upcoming Events</h2>
          <section className='containercardHalaman3'>
            <div className='containercard1Halaman3'>
              <img className='imgcard1Halaman3' src={TaketheTrash}></img>
              <button className='btncardHalaman3'>Buy Now
                <img src={ArrowRight}></img>
              </button>
            </div>
            <div className='containercard1Halaman3'>
              <img className='imgcard1Halaman3' src={Pilmapres}></img>
              <button className='btncardHalaman3'>Buy Now</button>
            </div>
            <div className='containercard1Halaman3'>
              <img className='imgcard1Halaman3'src={PersonalBranding}></img>
              <button className='btncardHalaman3'>Buy Now</button>
            </div>
          </section>
        </main>
    </div>
  )
}

export default Halaman3
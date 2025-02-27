import React from 'react'
import img from "../../assets/galeryoflife.png"
import logo2 from "../../assets/logo2.png"
import "./UpcomingEvent.css"

function UpcomingEvent() {
  return (
    <div className="containerUpcomingEvent">
        <h2 className="judulUpcomingEvent">
            Upcoming Event
        </h2>
        <div className="containerIsi">
            <div className="containerInfoIsi">
                <img className="logoInfoIsi" src={logo2}></img>
                <div className="containerInfo-2">
                    <h3 className="judulInfoIsi">Galery of Life: Ekspresi Dari Melukis</h3>
                    <div className="containerDateLocUp">
                    <h4>Date</h4>
                    <p>JAN 10 2025</p>
                    <h4>Location</h4>
                    <p>Taman Kampus 1 UTY</p>
                    </div>
                    <div className="containerBtn">
                        <button className="btn">More Info</button>
                        <button className="btn">Buy Now</button>
                    </div>
                    <p className="cta">&quot;Ekspresikan Kreativitasmu di Galery of Life&quot;</p>
                </div>
            </div>
            <div className="containerImgEvent">
                <img className="img" src={img}></img>
                <div className="backgroundImg"></div>
            </div>
        </div>
    </div>
  )
}

export default UpcomingEvent
import React, { useEffect } from "react";
import hubung from "../../assets/LogoHubung'ins.png";
import perspektif from "../../assets/LogoPerspektif.png";
import terai from "../../assets/LogoTerai.png";
import "./Halaman4.css";
import Anggota from "../../assets/anggota.png"
import { handleResponsive } from "../../handleResponsive";


export default function Halaman4() {
const { windowWidth, tampilanMobile } = handleResponsive();

useEffect(() => {

}, [windowWidth, tampilanMobile])

return (
<>
  <div className="page-4">
    <div className="containerHalaman4">
      <section className="isiHalaman4">
        <div className="containerJudul">
        <h2 className="headingHalaman4">
          Let's Connect
        </h2>
        <h2 className="headingHalaman4Small">
          With Us!
        </h2>
        </div>
        <div className='containerImg'>
          <img 
          className="imgHal4"
          src={Anggota}></img>
          <img 
          className='img2Hal4'
          src={Anggota}></img>
        </div>
        <div className="filterImg">
          </div>
      </section>
      <div className="abstract-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        <div className="dukunganNpartner">
        <section>
          <h4 className="heading4">
            Supported By :
          </h4>
          <div className="wadahLogoDukungan">
            <img className="logoDukungan" src={hubung}
              alt="" />
          </div>
        </section>
        <section>
          <h4 className="heading4">
            Partner Us :
          </h4>
          <div className="wadahLogoDukungan">
            <img className="logoDukungan" src={terai}
              alt="" />
            <img className="logoDukungan"
              src={perspektif} alt="" />
          </div>
        </section>
      </div>
    </div>
  </div>
</>
);
}
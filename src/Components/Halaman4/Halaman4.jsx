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
  const img = document.querySelector(".imgHal4")
  const filter = document.querySelector(".filterImg")

  // filter.style.width = `${img.width}px`
  // filter.style.height = `${img.height/4}px`
}, [])

return (
<>
  <div className={`page-4 ${tampilanMobile ? "mobile-page-4" : "page-4" }`}>
    <div className={`containerHalaman4 ${ tampilanMobile ? "mobile-containerHalaman4" : "containerHalaman4" }`}>
      <section className={`isiHalaman4 ${ tampilanMobile ? "mobile-isiHalaman4" : "isiHalaman4" }`}>
        <h2 className={`headingHalaman4 ${ tampilanMobile ? "mobile-headingHalaman4" : "headingHalaman4" }`}>
          Let's Connect
        </h2>
        <h2 className={`headingHalaman4Small ${ tampilanMobile ? "mobile-headingHalaman4Small" : "headingHalaman4Small"
          }`}>
          With Us!
        </h2>
        <div className={`containerImg ${
          tampilanMobile ? "mobile-containerImg" : "containerImg"
        }`}>
          <img 
          className={`imgHal4 ${
            tampilanMobile ? "mobile-imgHal4" : "imgHal4"
          }`}
          src={Anggota}></img>
          <div className={`filterImg ${
            tampilanMobile ? "mobile-filterImg" : "filterImg"
          }`}>
          </div>
        </div>
      </section>
      <div className={`abstract-container ${ tampilanMobile ? "mobile-abstract-container" : "abstract-container" }`}>
          <div className={`blob blob-1 ${ tampilanMobile ? "mobile-blob-1" : "blob-1" }`}></div>
          <div className={`blob blob-2 ${ tampilanMobile ? "mobile-blob-2" : "blob-2" }`}></div>
          <div className={`blob blob-3 ${ tampilanMobile ? "mobile-blob-3" : "blob-3" }`}></div>
        </div>
        <div className={`dukunganNpartner ${ tampilanMobile ? "mobile-dukunganNpartner" : "dukunganNpartner" }`}>
        <section>
          <h4 className={`${tampilanMobile ? "mobile-heading4" : "heading4" }`}>
            Supported By :
          </h4>
          <div className={`wadahLogoDukungan ${ tampilanMobile ? "mobile-wadahLogoDukungan" : "wadahLogoDukungan" }`}>
            <img className={`logoDukungan ${ tampilanMobile ? "mobile-logoDukungan" : "logoDukungan" }`} src={hubung}
              alt="" />
          </div>
        </section>
        <section>
          <h4 className={`${tampilanMobile ? "mobile-heading4" : "heading4" }`}>
            Partner Us :
          </h4>
          <div className={`wadahLogoDukungan ${ tampilanMobile ? "mobile-wadahLogoDukungan" : "wadahLogoDukungan" }`}>
            <img className={`logoDukungan ${ tampilanMobile ? "mobile-logoDukungan" : "logoDukungan" }`} src={terai}
              alt="" />
            <img className={`logoDukungan ${ tampilanMobile ? "mobile-logoDukungan" : "logoDukungan" }`}
              src={perspektif} alt="" />
          </div>
        </section>
      </div>
    </div>
  </div>
</>
);
}
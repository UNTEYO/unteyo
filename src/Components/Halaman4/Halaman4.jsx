import React from "react";
import coba from "../../assets/tiktok.png";
import "./Halaman4.css";

export default function Halaman4() {
  return (
    <>
      <div className="containerHalaman4">
        <section className="isiHalaman4">
          <h2 className="headingHalaman4">Let's Connect</h2>
          <h2 className="headingHalaman4Small">With Us!</h2>
        </section>
        <div className="photo-container">
          <div className="abstract-container">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
          </div>
        </div>
        <div className="dukunganNpartner">
          <section>
            <h4>Supported By :</h4>
            <img src={coba} alt="" />
          </section>
          <section>
            <h4>Partner Us :</h4>
            <img src={coba} alt="" />
            <img src={coba} alt="" />
          </section>
        </div>
      </div>
    </>
  );
}

import ListSegment from "./ListSegment";
import "./lower.css";
import MediaSos from "./MediaSos";
import FotoIndonesia from "D:/websiteunteyo/unteyo/src/assets/Indonesia.png";

export default function Lower() {
  return (
    <>
      <div className="containerLower">
        <div className="lowerMain">
          <section className="lowerFirst">
            <h3 className="heroLower">Stay Updated</h3>
            <p className="subHeroLower">
              Daftar ke buletin kami untuk mendapatkan pembaruan langsung ke
              kotak masuk Anda.
            </p>
          </section>
          <section className="lowerSecond">
            <ListSegment
              headLine="Products"
              listHeadline="Program"
              listHeadline1="News"
              listHeadline2="Product"
            ></ListSegment>
            <ListSegment
              headLine="Abouts"
              listHeadline="About Us"
              listHeadline1="Program"
              listHeadline2="News"
            ></ListSegment>
            <ListSegment
              headLine="Help"
              listHeadline="Dukungan"
              listHeadline1="Jaminan"
              listHeadline2="Products"
            ></ListSegment>
          </section>
        </div>
        <MediaSos></MediaSos>
        <div className="lastLower">
          <div className="location">
            <img src={FotoIndonesia} alt="" />
            <p className="country">Indonesia(Jawa)</p>
          </div>
          <div className="controllerSettings">
            <p>Privacy Policy</p>
            <p>Privacy Policy</p>
            <p>Privacy Policy</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
}

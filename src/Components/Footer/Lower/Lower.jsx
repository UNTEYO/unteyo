import ListSegment from "./ListSegment";
import "./lower.css";
import MediaSos from "./MediaSos";
import FotoIndonesia from "../../../assets/Indonesia.png";
import EmailInput from "./EmaiInput";
import { handleResponsive } from "../../../handleResponsive";

export default function Lower() {
  const { tampilanMobile } = handleResponsive();

  return (
    <>
      <div
        className={`containerLower ${
          tampilanMobile ? "mobile-containerLower" : "containerLower"
        }`}
      >
        <div
          className={`lowerMain ${
            tampilanMobile ? "mobile-lowerMain" : "lowerMain"
          }`}
        >
          <section
            className={`lowerFirst ${
              tampilanMobile ? "mobile-lowerFirst" : "lowerFirst"
            }`}
          >
            <h3
              className={`heroLower ${
                tampilanMobile ? "mobile-heroLower" : "heroLower"
              }`}
            >
              Stay Updated
            </h3>
            <p
              className={`subHeroLower ${
                tampilanMobile ? "mobile-subHeroLower" : "subHeroLower"
              }`}
            >
              Bergabunglah dengan komunitas kami dengan mendaftar ke buletin
              eksklusif kami. Dengan hanya mendaftar, Anda akan menerima
              pembaruan terkini, informasi penting, penawaran khusus, dan konten
              eksklusif lainnya langsung di kotak masuk email Anda, memastikan
              Anda selalu selangkah lebih maju dan tidak melewatkan informasi
              berharga.
            </p>
            <EmailInput />
          </section>
          <section
            className={`lowerSecond ${
              tampilanMobile ? "mobile-lowerSecond" : "lowerSecond"
            }`}
          >
            <ListSegment
              headLine="Products"
              listHeadline="Program"
              listHeadline1="News"
              listHeadline2="Product"
              href1="#program"
              href2="#news"
              href3="#product"
            />
            <ListSegment
              headLine="Abouts"
              listHeadline="About Us"
              listHeadline1="Program"
              listHeadline2="News"
              href1="#about"
              href2="#program"
              href3="#news"
            />
            <ListSegment
              headLine="Help"
              listHeadline="Dukungan"
              listHeadline1="Jaminan"
              listHeadline2="Products"
              href1="#support"
              href2="#guarantee"
              href3="#product"
            />
          </section>
        </div>
        <MediaSos />
        <div
          className={`lastLower ${
            tampilanMobile ? "mobile-lastLower" : "lastLower"
          }`}
        >
          <div
            className={`location ${
              tampilanMobile ? "mobile-location" : "location"
            }`}
          >
            <img
              className={`gambarIndo ${
                tampilanMobile ? "mobile-gambarIndo" : "gambarIndo"
              }`}
              src={FotoIndonesia}
              alt="Indonesia map"
            />
            <p
              className={`country ${
                tampilanMobile ? "mobile-country" : "country"
              }`}
            >
              Indonesia(Jawa)
            </p>
          </div>
          <div
            className={`controllerSettings ${
              tampilanMobile
                ? "mobile-controllerSettings"
                : "controllerSettings"
            }`}
          >
            <a className="a-footer" href="#/privacy-policy">
              Privacy Policy
            </a>
            <a className="a-footer" href="#/privacy-policy">
              Terms & Conditions
            </a>
            <a className="a-footer" href="#/cookiepolicy">
              Cookie Policy
            </a>
            <a className="a-footer" href="#/privacy-policy">
              Recruitment Privacy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

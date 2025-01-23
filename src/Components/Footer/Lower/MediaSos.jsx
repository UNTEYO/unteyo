import FotoInstagram from "../../../assets/instagram.png";
import FotoFacebook from "../../../assets/facebook.png";
import FotoTiktok from "../../../assets/tiktok.png";
import FotoTwitter from "../../../assets/twitter.png";
import FotoYoutube from "../../../assets/youtube.png";
import "./lower.css";
import { handleResponsive } from "../../../handleResponsive";

export default function MediaSos() {
  const { windowWidth, tampilanMobile } = handleResponsive();

  return (
    <>
      <figure
        className={`lowerMediaSosial ${
          tampilanMobile ? "mobile-lowerMediaSosial" : "lowerMediaSosial"
        }`}
      >
        <img
          className={`image-medsos ${
            tampilanMobile ? "mobile-image-medsos" : "image-medsos"
          }`}
          src={FotoInstagram}
          alt=""
        />
        <img
          className={`image-medsos ${
            tampilanMobile ? "mobile-image-medsos" : "image-medsos"
          }`}
          src={FotoFacebook}
          alt=""
        />
        <img
          className={`image-medsos ${
            tampilanMobile ? "mobile-image-medsos" : "image-medsos"
          }`}
          src={FotoTiktok}
          alt=""
        />
        <img
          className={`image-medsos ${
            tampilanMobile ? "mobile-image-medsos" : "image-medsos"
          }`}
          src={FotoTwitter}
          alt=""
        />
        <img
          className={`image-medsos ${
            tampilanMobile ? "mobile-image-medsos" : "image-medsos"
          }`}
          src={FotoYoutube}
          alt=""
        />
      </figure>
    </>
  );
}

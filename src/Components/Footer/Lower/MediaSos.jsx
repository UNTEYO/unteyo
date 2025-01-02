import FotoInstagram from "D:/websiteunteyo/unteyo/src/assets/instagram.png";
import FotoFacebook from "D:/websiteunteyo/unteyo/src/assets/facebook.png";
import FotoTiktok from "D:/websiteunteyo/unteyo/src/assets/tiktok.png";
import FotoTwitter from "D:/websiteunteyo/unteyo/src/assets/twitter.png";
import FotoYoutube from "D:/websiteunteyo/unteyo/src/assets/youtube.png";

export default function MediaSos() {
  return (
    <>
      <figure className="lowerMediaSosial">
        <img src={FotoInstagram} alt="" />
        <img src={FotoFacebook} alt="" />
        <img src={FotoTiktok} alt="" />
        <img src={FotoTwitter} alt="" />
        <img src={FotoYoutube} alt="" />
      </figure>
    </>
  );
}

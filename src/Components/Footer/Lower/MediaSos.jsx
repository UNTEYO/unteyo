import FotoInstagram from "../../../assets/instagram.png";
import FotoFacebook from "../../../assets/facebook.png";
import FotoTiktok from "../../../assets/tiktok.png";
import FotoTwitter from "../../../assets/twitter.png";
import FotoYoutube from "../../../assets/youtube.png";

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

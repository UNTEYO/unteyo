import FotoInstagram from "../../../assets/instagram.png";
import FotoFacebook from "../../../assets/facebook.png";
import FotoTiktok from "../../../assets/tiktok.png";
import FotoTwitter from "../../../assets/twitter.png";
import FotoYoutube from "../../../assets/youtube.png";
import "./lower.css";

export default function MediaSos() {

  return (
    <>
      <figure
        className="lowerMediaSosial"
      >
        <img
          className="image-medsos"
          src={FotoInstagram}
          alt=""
        />
        <img
          className='image-medsos'
          src={FotoFacebook}
          alt=""
        />
        <img
          className="image-medsos"
          src={FotoTiktok}
          alt=""
        />
        <img
          className="image-medsos"
          src={FotoTwitter}
          alt=""
        />
        <img
          className="image-medsos"
          src={FotoYoutube}
          alt=""
        />
      </figure>
    </>
  );
}

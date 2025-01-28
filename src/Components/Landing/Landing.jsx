import { useEffect, useState } from "react";
import "./Landing.css";
import WaveDot from "./WaveDot";
import { handleResponsive } from "../../handleResponsive";

function Landing() {
  const { tampilanMobile } = handleResponsive();
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentscrollY = window.scrollY + 1
      if (currentscrollY > window.scrollY) {
        setIsScrolled(true)
        const judul1 = document.querySelector(".judulLanding")
        judul1.style.transfrom = "translateX(1)"
        console.log("kontol")
      } else {
        setIsScrolled(false);
        console.log("Memek")
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="containerLanding">
        <WaveDot></WaveDot>
        <div className="content-container">
          <h1
            className={`judulLanding ${isScrolled ? "slide-back" : ""} ${
              tampilanMobile ? "mobile-judulLanding" : "judulLanding"
            }`}
          >
            Unteyo Journey
          </h1>
          <h2
            className={`judulLanding2 ${
              tampilanMobile ? "mobile-judulLanding2" : "judulLanding2"
            }`}
          >
            Greeting Quality Students
          </h2>
          <button
            className={`btnLanding ${
              tampilanMobile ? "mobile-btnLanding" : "btnLanding"
            }`}
          >
            Explore Our Journey
          </button>
          <h4
            className={`tagLanding ${
              tampilanMobile ? "mobile-tagLanding" : "tagLanding"
            }`}
          >
            #BeWise
          </h4>
        </div>
      </div>
    </>
  );
}

export default Landing;

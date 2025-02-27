import { useEffect, useState } from "react";
import "./Landing.css";
import WaveDot from "./WaveDot";
import { handleResponsive } from "../../handleResponsive";

function Landing() {
  const { tampilanMobile } = handleResponsive();
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0)


  function lebar() {
    console.log(`lebar ${window.innerWidth}`)
    console.log(`tinggi ${window.innerHeight}`)
  }

  useEffect(() => {
    const lenis = new Lenis({});

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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="containerLanding">
        <WaveDot></WaveDot>
        <div className="content-container">
          <h1
            className="judulLanding"
          >
            Unteyo Journey
          </h1>
          <h2
            className="judulLanding2"
          >
            Greeting Quality Students
          </h2>
          <button
            className="btnLanding"
          >
            Explore Our Journey
          </button>
          <h4
            className="tagLanding"
          >
            #BeWise
          </h4>
        </div>
      </div>
    </>
  );
}

export default Landing;

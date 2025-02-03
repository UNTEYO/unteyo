import React, { useEffect } from "react";
import "../App.css";
import Decor from "../Components/Landing/Decor";
import Landing from "../Components/Landing/Landing";
import Header from "../Components/Header/Header";
import Halaman1 from "../Components/Halaman1/Halaman1";
import Halaman2 from "../Components/Halaman 2/Halaman2";
import Halaman3 from "../Components/Halaman 3/Halaman3";
import Halaman4 from "../Components/Halaman4/Halaman4";
import Footer from "../Components/Footer/Footer";

function MainLanding() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time * 1.25);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="containerAll">
      <Header></Header>
      <Landing></Landing>
      <Decor></Decor>
      <Halaman1></Halaman1>
      <Halaman2></Halaman2>
      <Halaman3></Halaman3>
      <Halaman4></Halaman4>
      <Footer></Footer>
    </div>
  );
}

export default MainLanding;

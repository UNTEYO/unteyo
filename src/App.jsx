import React from "react";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import Decor from "./Components/Landing/Decor";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Halaman1 from "./Components/Halaman1/Halaman1";
import Halaman2 from "./Components/Halaman 2/Halaman2";
import Halaman3 from "./Components/Halaman 3/Halaman3"
import Halaman4 from "./Components/Halaman4/Halaman4";

function App() {
  return (
    <div className="containerAll">
      <Header />
      <Landing />
      <Decor />
      <Halaman1 />
      <Halaman2></Halaman2>
      <Halaman3></Halaman3>
      <Halaman4></Halaman4>
      <Footer></Footer>
    </div>
  );
}

export default App;

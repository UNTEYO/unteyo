import React from "react";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import Decor from "./Components/Landing/Decor";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="containerAll">
      <Header />
      <Landing />
      <Decor />
      <Footer></Footer>
    </div>
  );
}

export default App;

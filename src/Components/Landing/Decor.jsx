import React from "react";
import Like from "../../assets/like.png";
import Love from "../../assets/love.png";

import "./Decor.css";

function Decor() {

  return (
    <div>
      <img src={Like} className="likeDecor"></img>
      <img src={Love} className="loveDecor"></img>
      <div className="sprayDecor1"></div>
      <div className="sprayDecor1-1"></div>
      <div className="sprayDecor2"></div>
      <div className="sprayDecor2-2"></div>
      <div className="sprayDecor2-2-2"></div>
      <div className="sprayDecor3"></div>
    </div>
  );
}

export default Decor;

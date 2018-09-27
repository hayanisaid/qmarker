import React from "react";
import "./card.css";
//const image = require("./../assets/images/image1.png");

import Image from "./../../assets/images/image1.png";

const Card = () => (
  <div className="card">
    <div className="card-header">
      <div className="card-img">
        <img src={Image} alt="card img" />
      </div>
    </div>
    <div className="card-body">
      <div className="card-text">
        <h1>How To fix undefined in React native ⚠️</h1>
        <p> This is How we can fix the error by runing </p>
      </div>
      <div className="card-footer">
        <a href="#">
          Check <span role="img"> ✔️ </span>
        </a>
      </div>
    </div>
  </div>
);

export default Card;

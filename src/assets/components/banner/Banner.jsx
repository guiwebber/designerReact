import React from "react";
import "../topo/topo.css";
import imgBanner from "../../images/banner.png";


function Banner(props) {
  return (
    <div className="banner">
      <div className={`imgBanner ${props.dayOrNight === 'dia' ? "dark-theme" :"light-theme"}`}>
        <img src={imgBanner} alt="" />
      </div>
      <div className="textBanner">
        <p>BRANDING / UI / UX / TECNOLOGIA</p>
        <h2 className="subtitle">
          Agência de Branding <br/> <span className="bold">e design digital</span>
        </h2>
      </div>
    </div>
  );
}

export default Banner;

import React from "react";
import "../topo/topo.css";
import logo from "../../images/logo.png";
import facebook from "../../images/facebook.png";
import google from "../../images/google-plus.png";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twitter.png";
import behance from "../../images/behance.png";
import dribble from "../../images/dribble.png";

function Footer(props) {
  return (
    <div className={`footer ${props.dayOrNight === 'dia' ? "dark-theme" :"light-theme"}`}>
      <img className="logoImg" src={logo} alt="" />
      <p className="textFooter grayThin">
        Ajudamos a criar uma personalidade digital construindo sua marca no
        ambiente online utilizando estratégias, ferramentas e tecnologias
        personalizadas.
      </p>
      <div className="imgSites">
        <img src={facebook} alt="" />
        <img src={google} alt="" />
        <img src={linkedin} alt="" />
        <img src={twitter} alt="" />
        <img src={behance} alt="" />
        <img src={dribble} alt="" />
      </div>
      <div className="cc">
        <p className="grayThin"> Copyright 2022 <span className="spanY">Guilherme Webber</span></p>
      </div>
    </div>
  );
}

export default Footer;

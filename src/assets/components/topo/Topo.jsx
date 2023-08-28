import React from "react";
import logo from "../../images/logo.png";
import "./topo.css";
import moonBotao from "../../images/moon.png";
import sunBotao from "../../images/sun.png";
function Topo(props) {
  return (
    <div className={`topo ${props.dayOrNight === "dia" ? "dark-theme" : "light-theme"}`}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <button onClick={props.click}>
          <img src={props.changeTheme ? moonBotao : sunBotao} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Topo;

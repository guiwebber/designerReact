import React, { useState } from "react";
import Topo from "./assets/components/topo/Topo";
import Footer from "./assets/components/footer/Footer";
import Exp from "./assets/components/exp/Exp";
import Banner from "./assets/components/banner/Banner";

function App() {
  const [changeTheme, setChangeTheme] = useState("dia");

  const changeDayNight = () => {
    if (changeTheme === "dia") {
      setChangeTheme("noite");
    } else {
      setChangeTheme("dia");
    }
  };
  return (
    <>
      <Topo click={changeDayNight} dayOrNight={changeTheme} />
      <Banner dayOrNight={changeTheme} />
      <Exp dayOrNight={changeTheme}/>
      <Footer dayOrNight={changeTheme}/>
    </>
  );
}

export default App;

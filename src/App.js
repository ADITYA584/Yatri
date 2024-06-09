import React from "react";
import NavBar from "./components/NavBar";
import classes from "./App.module.css";
import HeroSection from "./components/HeroSection";
import WhySection from "./components/WhySection";
import Sectiongrid from "./components/Sectiongrid";
import Compare from "./components/Compare";
import Textsection1 from "./components/Textsection1";
import Textsection2 from "./components/Textsection2";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className={`${classes.app}`}>
        <HeroSection />
        <WhySection />
        <Sectiongrid />
        <Compare />
        <Textsection1 />
        <Textsection2 />
      </div>
    </React.Fragment>
  );
}

export default App;

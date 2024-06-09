import React from "react";
import Logo from "../Assets/svgs/Logo.svg";
import Download from "../Assets/svgs/Download.svg";
import Account from "../Assets/svgs/Account.svg";
import center_logo from "../Assets/svgs/centerNav.svg";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={`${classes.nav}`}>
      <div>
        <img src={Logo} height="65px" alt="Logo" />
      </div>
      <div>
        <img src={center_logo} alt="24*7"></img>
      </div>
      <div className={`${classes.right}`}>
        <div className={`${classes.right_cover}`}>
          <div className={`${classes.greenback}`}>
            <img src={Download} id="a" alt="Download" />
          </div>
          <p>Download App</p>
        </div>
        <div className={`${classes.right_cover}`}>
          <div className={`${classes.greenback}`}>
            <img src={Account} width="30px" alt="Account" />
          </div>
          <p>Ravi</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Logo from "../../images/logo.PNG";
import "./header.css";

function Header() {
  return (
    <div className="banner">
      <Sidebar />
      <div id="page-wrap">
        <img
          className="photo"
          src={Logo}
          alt="RobNWings header"
          class="center"
          height={100}
          width={100}
          border-radius={3}
          border-color="red;"
        />
      </div>
    </div>
  );
}

export default Header;

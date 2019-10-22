import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";

class SideBar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/menu">
          Menu
        </a>
        <a className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    );
  }
}

export default SideBar;

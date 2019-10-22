import React from "react";
import Logo from "../../images/logo.PNG";

import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2 className="footer-header">Follow/Contact Us:</h2>
      <img
        src={Logo}
        alt="RobNWings"
        height={150}
        width={150}
        style={{ alignSelf: "center" }}
      />
      <br></br>
      <br></br>
      <div className="social">
        <div className="row">
          <div className="column">
            <a href="https://instagram.com/robnwings">Instagram</a>
          </div>
          <div className="column">
            <a href="https://twitter.com/robnwings">Twitter</a>
          </div>
          <div className="column">
            <a href="https://facebook.com/531364073911268">Facebook</a>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="https://affluentdev.io">Affluent Developments</a>
      </div>
    </div>
  );
}

export default Footer;

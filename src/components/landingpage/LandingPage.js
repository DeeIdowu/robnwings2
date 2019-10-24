import React from "react";
import Button from "react-bootstrap/Button";
import Logo2 from "../../images/logo2.PNG";
import "./landingpage.css";

function LandingPage() {
  return (
    <div>
      <img className="bg" src={Logo2} alt="background-logo" />
      <div
        className="overlay"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <a href="/home">
          <Button className="homebutton" variant="outline-danger">
            Enter
          </Button>
        </a>
      </div>
    </div>
  );
}

export default LandingPage;

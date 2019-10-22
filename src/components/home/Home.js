import React from "react";
import Header from "../header/Header";
import About from "../about/About";
import HomeServices from "../home-services/HomeServices";
import MissionStatement from "../mission-statement/MissionStatement";
import Testimonials from "../testimonials/Testimonials";
import { BrowserRouter as Route } from "react-router-dom";
import Footer from "../footer/Footer";
import "./home.css";

function Home() {
  return (
    <Route>
      <Header />
      <About />

      <br></br>
      <div className="about">
        <h1 className="about-title">About</h1>
        <p className="about-body">
          Rob N Wings was established Spring of 2017 delivering quality dishes
          of chicken and fries for the avid foodie and meat-connoisseur. The
          birth of RobNWings came about via the attestation and praise of
          plethora from friends and associates whom believed the exquisite meals
          should be shared with the masses. Rob N Wings has been notorized for
          the home grown South Side Sauce and Wings in tribute to the reknowned
          South Side of Brampton which has become a customer-favourite across
          the vast beautiful GTA along with the array of flavours on the menu.
        </p>
      </div>
      <br></br>

      <HomeServices />
      <MissionStatement />
      <Testimonials />
      <Footer />
    </Route>
  );
}

export default Home;

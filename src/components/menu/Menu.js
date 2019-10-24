import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import MenuCarousel from "../menu-carousel/MenuCarousel";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./menu.css";
import { black } from "ansi-colors";

function Menu() {
  return (
    <Route>
      <Header />
      <MenuCarousel />
      <div className="menu-content">
        <h1 style={{ fontSize: 50 }}> Catering Menu:</h1>

        <h3 className="main-dishes" style={{ fontSize: 45 }}>
          Main:
        </h3>
        <ul>
          <li>Chicken Wings quantities of 50 pcs+</li>
          <li>Chicken Strips quantities of 50pcs+</li>
          <li>Likkle Bits in tray sizes: Medium or Large</li>
        </ul>

        <h3 className="side-dishes" style={{ fontSize: 45 }}>
          Sides:
        </h3>
        <ul>
          <li>South-Side Chicken Wraps</li>
          <li>French Fries</li>
          <li>South-Side Caesar Fries</li>
          <li>South-Side Chicken Sandwich</li>
          <li>South-Side Chicken Sliders</li>
        </ul>

        <h3 className="sauces" style={{ fontSize: 45 }}>
          Available Sauces:
        </h3>
        <p>* on or on the side of wings*</p>
        <ul>
          <li>South-Side Sauce</li>
          <li>Dirty South</li>
          <li>IG Honey</li>
          <li>Bishop Brew</li>
          <li>BBQ</li>
          <li>Lemon Pepper (Wet or Dry)</li>
          <li>Chipotle Mango</li>
          <li>Super South-Side(HOT!!!)</li>
        </ul>

        <h3 className="bottled-sauces" style={{ fontSize: 45 }}>
          Bottled Sauces For Sale:
        </h3>
        <ul>
          <li>South-Side Sauce</li>
          <li> Dirty South Sauce </li>
          <li> IG Honey Sauce</li>
          <li>Bishop Brew</li>
        </ul>

        <p>
          For further inquiries, bookings and purchasing of services/bottled
          goods inquire here:{" "}
          <Link to="/contact" className="link-contact">
            Contact
          </Link>{" "}
        </p>
      </div>

      <Footer />
    </Route>
  );
}

export default Menu;

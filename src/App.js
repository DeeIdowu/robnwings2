import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
};
export default App;

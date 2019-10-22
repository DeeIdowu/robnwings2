import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={Menu} />
    </Router>
  );
}

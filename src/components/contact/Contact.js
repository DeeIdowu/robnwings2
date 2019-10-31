import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <br></br>
        <br></br>
        <h1>Contact Us:</h1>
        <form className="contact-form">
          <label className="name">
            Name: <input type="text"></input>
          </label>
          <br></br>
          <br></br>
          <label className="email">
            Email: <input type="text"></input>
          </label>
          <br></br>
          <br></br>
          <label className="subject">
            Subject: <input type="text"></input>
          </label>
          <br></br>
          <br></br>
          <label>Message:</label>
          <br></br>
          <textarea className="textarea"></textarea>
          <br></br>
          <br></br>
          <input id="Submit" type="submit" value="Submit"></input>
        </form>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}
export default Contact;

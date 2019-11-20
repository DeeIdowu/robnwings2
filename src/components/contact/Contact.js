import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Axios from "axios";
import "./contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      disabled: false,
      emailSent: null
    };
  }
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
      disabled: true
    });

    Axios.post("http://localhost:3030/api/email", this.state)
      .then(res => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false
          });
        }
      })
      .catch(err => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false
        });
      });
  };

  render() {
    return (
      <div>
        <Header />
        <br></br>
        <br></br>
        <h1>Contact Us:</h1>
        <form onSubmit={this.handleSubmit} className="contact-form">
          <label
            className="name"
            value={this.state.name}
            onChange={this.handleChange}
          >
            Name: <input type="text"></input>
          </label>
          <br></br>
          <br></br>
          <label
            className="email"
            value={this.state.email}
            onChange={this.handleChange}
          >
            Email: <input type="text"></input>
          </label>
          <br></br>
          <br></br>
          <label
            className="subject"
            value={this.state.subject}
            onChange={this.handleChange}
          >
            Subject: <input type="text"></input>
          </label>
          <br></br>
          <br></br>
          <label value={this.state.message} onChange={this.handleChange}>
            Message:
          </label>
          <br></br>
          <textarea className="textarea"></textarea>
          <br></br>
          <br></br>
          <input
            className="submit-button"
            id="Submit"
            type="submit"
            value="Submit"
            disabled={this.state.disabled}
          ></input>

          <br></br>
          {this.state.emailSent === true && (
            <p className="d-inline success-msg">Email Sent</p>
          )}
          {this.state.emailSent === false && (
            <p className="d-inline err-msg">Email Not Sent</p>
          )}
        </form>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}
export default Contact;

import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      emailSent: null
    };
  }
  //handling change
  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const email = target.email;
    const subject = target.subject;
    const message = target.message;

    this.setState({
      [name]: target,
      [email]: target,
      [subject]: target,
      [message]: target
    });
  };
  //handling the submitting of the form
  handleSubmit = event => {
    event.preventDefault(); //prevention of refreshing the page

    this.setState({
      disabled: true, //disable the ability to send an email more than once
      emailSent: false
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
          ></input>

          {this.state.emailSent === true && alert("E-mail sent, Thank you!!!")}
          {this.state.emailSent === false &&
            alert("Error, E-mail did not send!!")}
        </form>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}
export default Contact;

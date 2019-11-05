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
    console.log(event);

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
          <input id="Submit" type="submit" value="Submit"></input>

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

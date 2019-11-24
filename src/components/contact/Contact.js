import React from "react";
import Header from "../header/Header";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import Footer from "../footer/Footer";
import axios from "axios";
import "./contact.css";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    const { name, email, message } = this.state;

    const form = await axios.post("/api/form", {
      name,
      email,
      message
    });
    alert("Thank you for your submission/inquiry");
  }

  render() {
    return (
      <div>
        <Header />
        <br></br>
        <br></br>
        <h1>Contact Us:</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">Name:</Label>
            <Input
              type="text"
              name={this.state.name}
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="email">E-mail:</Label>
            <Input
              type="email"
              name={this.state.email}
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="message">Message:</Label>
            <Input
              type="textarea"
              name={this.state.message}
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <Button type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>

        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}
export default Contact;

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//test route

app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
        <h3> Contact Details:</h3>
        <ul>
        <li> Name: ${req.body.name} </li>
        <li> Email: ${req.body.email} </li>
      </ul>
      <h3> Message: </h3>
      <p>${req.body.message}</p>
        `;
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: process.env.user,
        pass: process.env.pass
      }
    });

    let mailOptions = {
      from: "newinquiry@gmail.com",
      to: "timmothy.larkin23@ethereal.email",
      replyTo: "newinquiry@gmail.com",
      subject: "New Inquiry",
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Message Sent: %s", info.message);
      console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

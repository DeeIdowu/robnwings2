const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendGrid = require("@sendgrid/mail");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Change later to only allow our server
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (req, res, next) => {
  res.send("API Status: All Systems Go");
});

app.post("/api/email", (req, res, next) => {
  sendGrid.setApiKey(
    "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"
  );
});

app.listen(3030, "0.0.0.0");

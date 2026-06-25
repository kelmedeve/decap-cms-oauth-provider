const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/auth", (req, res) => {
  res.send("Auth endpoint funcionando!");
});

app.get("/callback", (req, res) => {
  res.send("Callback endpoint funcionando!");
});

module.exports = app;

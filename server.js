const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rota de autenticação
app.get("/auth", (req, res) => {
  res.json({ message: "Auth endpoint funcionando!" });
});

// Rota de callback
app.get("/callback", (req, res) => {
  res.json({ message: "Callback endpoint funcionando!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

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

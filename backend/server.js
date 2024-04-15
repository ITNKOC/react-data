const produits = require("./data/produits.js");
const users = require("./data/users");
const accueil = require("./data/accueil");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route pour renvoyer tous les produits
app.get("/produits", (req, res) => {
  res.json(produits);
});

// Route pour renvoyer la page d'accueil
app.get("/accueil", (req, res) => {
  res.json(accueil);
});

// Route pour renvoyer tous les utilisateurs
app.get("/users", (req, res) => {
  res.json(users);
});

app.listen((PORT = 5000), () =>
  console.log(`Server is running on port <http://localhost>:${PORT}`)
);

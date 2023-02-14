// DEPENDENCIES
const express = require("express");
const cors = require("cors");


// DEPENDENCY FOR ITEMS ROUTES
const itemsController = require("./controllers/itemController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE

app.use(cors());
app.use(express.json({limit: '16mb'}));
app.use(express.urlencoded({extended: false}));

// MIDDLEWARE FOR ITEMS ROUTE
app.use("/items", itemsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Buy Nothing App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;

// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const productsController = require("./controllers/productsController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use(express.static("public")); // Static images (locally)
app.use("/products", productsController);

// ROUTES
app.get("/", (req, res) => {
	res.send("Hello, backend products world!");
});

app.get("*", (req, res) => {
	res.status(404).send("404 - page not found");
});

// EXPORT
module.exports = app;

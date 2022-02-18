// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const productsController = require("./controllers/productsController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use("/products", productsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, backend products world!");
});

app.get("*", (req, res) => {
  res.status(404).send("404 - page not found");
})

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
// const db = require("./db/dbConfig.js");

// app.get("/test", async (req, res) => {
//   try {
//     const allDays = await db.any("SELECT * FROM test");
//     res.json(allDays);
//   } catch (err) {
//     res.json(err);
//   }
// });

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

// EXPORT
module.exports = app;

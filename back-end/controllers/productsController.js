const express = require("express");
const products = express.Router();

const { getAllProducts } = require("../queries/products.js");

// INDEX
products.get("/", async (req, res) => {
    try {
        const allProducts = await getAllProducts();
        res.status(200).json(allProducts);
    } catch (error) {
        console.log(error);
    }
});

module.exports = products;
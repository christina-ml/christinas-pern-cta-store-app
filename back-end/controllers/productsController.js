const e = require("cors");
const express = require("express");
const products = express.Router();

const { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct } = require("../queries/products.js");

// INDEX - GET ALL products
products.get("/", async (req, res) => {
    try {
        const allProducts = await getAllProducts();
        if (allProducts[0]) {
            res.status(200).json(allProducts);
        } else {
            res.status(500).json({ error: "500 - internal server error" });
        }
    } catch (error) {
        console.log(error);
    }
});

// GET ONE product
products.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const oneProduct = await getOneProduct(id);
        if (oneProduct.id) {
            res.status(200).json(oneProduct);
        } else {
            res.status(404).json({ error: "Product not found." });
        }
    } catch (error) {
        console.log(error);
    }
})

// CREATE product
products.post("/", async (req, res) => {
    try {
        const createdProduct = await createProduct(req.body); 
        if (createdProduct) {
            res.status(200).json(createdProduct);
        } else {
            res.status(500).json({ error: "500 - Product creation error." })
        }
    } catch (error) {
        console.log(error);
    }
})

// UPDATE product

// DELETE product

module.exports = products;
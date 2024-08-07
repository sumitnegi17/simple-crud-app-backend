const express = require("express");
const router = express.Router();
const Product = require('../models/product.model.js')
const { getProducts, getProduct, createproduct, updateproduct, deleteproduct } = require('../controllers/product.controller.js');


router.get('/', getProducts);

router.get('/:id', getProduct);

router.post("/", createproduct);

router.put('/:id', updateproduct);

router.delete('/:id', deleteproduct);

module.exports = router;
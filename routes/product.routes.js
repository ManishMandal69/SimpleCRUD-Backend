const express = require('express')
// const Product = require("../models/product.model")
const router = express.Router();
const {getProduct, getProducts, createProduct, updateProduct, deleteProduct} = require('../controllers/products.controller')


router.get('/', getProducts);
router.get('/:id', getProduct);

router.post('/', createProduct);

//update a product
router.put('/:id', updateProduct);

//delete product
router.delete('/:id', deleteProduct)


module.exports = router; 
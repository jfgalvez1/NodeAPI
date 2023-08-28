 const express = require('express');
 const Product = require('../models/productModel')
 const {getProducts,
        getProduct,
        createProduct,
        updateProduct,
        deleteProduct
    } = require('../controllers/productController')


 const router = express.Router();
  
 //Getting All Data from MongoDB
 router.get('/', getProducts);

//Getting Specific Data
router.get('/:id', getProduct )


router.post('/', createProduct)

// update a product
router.put('/:id', updateProduct)

//delete a product 
router.delete('/:id', deleteProduct)


module.exports = router;
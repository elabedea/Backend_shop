//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controllerProduct = require('../controllers/product');

//CREATE
router.post("/product", (req, res) => {

    controllerProduct.create(req, res);

});

//READ
router.get("/products/:id", (req, res) => {
    
    controllerProduct.reads(req, res);

});

router.get("/product/:id", (req, res) => {

    controllerProduct.read(req, res);

});

//UPDATE
router.put("/product/:id", (req, res) => {
    
    controllerProduct.update(req, res);

});

//DELETE
router.delete("/product/:id", (req, res) => {
    
    controllerProduct.delete(req, res);

});

module.exports = router;
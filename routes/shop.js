//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controllerShop = require('../controllers/shop');

//CREATE
router.post("/shop", (req, res) => {

    controllerShop.create(req, res);

});

//READ
router.get("/shops", (req, res) => {
    
    controllerShop.reads(req, res);

});

router.get("/shop/:id", (req, res) => {
    
    controllerShop.read(req, res);

});

//UPDATE
router.put("/shop/:id", (req, res) => {
    
    controllerShop.update(req, res);

});

//DELETE
router.delete("/shop/:id", (req, res) => {
    
    controllerShop.delete(req, res);

});

module.exports = router;
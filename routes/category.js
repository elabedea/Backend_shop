//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controllerCategory = require('../controllers/category');


//CREATE
router.post("/category", (req, res) => {

    controllerCategory.create(req, res);

});

//READ
router.get("/categories/:id", (req, res) => {
    
    controllerCategory.reads(req, res);

});

router.get("/category/:id", (req, res) => {
    
    controllerCategory.read(req, res);

});

//UPDATE
router.put("/category/:id", (req, res) => {
    
    controllerCategory.update(req, res);

});

//DELETE
router.delete("/category/:id", (req, res) => {
    
    controllerCategory.delete(req, res);

});

module.exports = router;
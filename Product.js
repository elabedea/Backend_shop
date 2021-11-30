function createProduct(req, res) {
    let Product = require('../models/product');
    let newProduct = Product ({
        name: req.body.name,
        description : req.body.description,
        idcategory : req.body.idcategory,
        price : req.body.price,
    });
  
    newProduct.save()
    .then((savedProduct) => {

        res.json(savedProduct);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readProducts(req, res) {

    let Product = require("../models/product");

    Product.find({idcategory : req.params.id})
    .then((Products) => {
        res.status(200).json(Products);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readProduct(req, res) {

    let Product = require("../models/product");

    Product.findById({_id : req.params.id})
    .then((Product) => {
        res.status(200).json(Product);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateProduct(req, res) {

    let Product = require("../models/product");

    Product.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        description : req.body.description,
        idcategory : req.body.idcategory,
        price : req.body.price}, 
        {new : true})
    .then((updatedProduct) => {
        res.status(200).json(updatedProduct);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteProduct(req, res) {

    let Product = require("../models/product");

    Product.findOneAndRemove({_id : req.params.id})
    .then((deletedProduct) => {
        res.status(200).json(deletedProduct);
    }, (err) => {
        res.status(500).json(err);
    });
 }


module.exports.create = createProduct;
module.exports.reads = readProducts;
module.exports.read = readProduct;
module.exports.delete = deleteProduct;
module.exports.update = updateProduct;


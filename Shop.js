function createShop(req, res) {
    let Shop = require('../models/shop');
    let newShop = Shop ({
        name: req.body.name,
        description : req.body.description
    });
  
    newShop.save()
    .then((savedShop) => {

        //send back the created Shop
        res.json(savedShop);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readShops(req, res) {

    let Shop = require("../models/shop");

    Shop.find({})
    .then((Shops) => {
        res.status(200).json(Shops);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readShop(req, res) {

    let Shop = require("../models/shop");

    Shop.findById({_id : req.params.id})
    .then((Shop) => {
        res.status(200).json(Shop);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateShop(req, res) {

    let Shop = require("../models/shop");

    Shop.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        description : req.body.description}, 
        {new : true})
    .then((updatedShop) => {
        res.status(200).json(updatedShop);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteShop(req, res) {

    let Shop = require("../models/shop");

    Shop.findOneAndRemove({_id : req.params.id})
    .then((deletedShop) => {
        res.status(200).json(deletedShop);
    }, (err) => {
        res.status(500).json(err);
    });
 }


module.exports.create = createShop;
module.exports.reads = readShops;
module.exports.read = readShop;
module.exports.delete = deleteShop;
module.exports.update = updateShop;


function createCategory(req, res) {
    let Category = require('../models/category');
    let newCategory = Category ({
        name: req.body.name,
        description : req.body.description,
        idshop : req.body.idshop,
    });
  
    newCategory.save()
    .then((savedCategory) => {

        //send back the created Category
        res.json(savedCategory);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readCategories(req, res) {

    let Category = require("../models/category");

    Category.find({idshop : req.params.id})
    .then((Categories) => {
        res.status(200).json(Categories);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 
function readCategory(req, res) {

    let Category = require("../models/category");

    Category.findById({_id : req.params.id})
    .then((Category) => {
        res.status(200).json(Category);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateCategory(req, res) {

    let Category = require("../models/category");

    Category.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        description : req.body.description,
        idshop : req.body.idshop}, 
        {new : true})
    .then((updatedCategory) => {
        res.status(200).json(updatedCategory);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteCategory(req, res) {

    let Category = require("../models/category");

    Category.findOneAndRemove({_id : req.params.id})
    .then((deletedCategory) => {
        res.status(200).json(deletedCategory);
    }, (err) => {
        res.status(500).json(err);
    });
 }


module.exports.create = createCategory;
module.exports.reads = readCategories;
module.exports.read = readCategory;
module.exports.delete = deleteCategory;
module.exports.update = updateCategory;


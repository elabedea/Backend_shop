var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name : String,
  description : String,
  idcategory : String,
  price : Number
});

module.exports = mongoose.model('Product', ProductSchema);

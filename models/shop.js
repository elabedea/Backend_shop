var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ShopSchema = new Schema({
  name : String,
  description : String
});

module.exports = mongoose.model('Shop',ShopSchema);

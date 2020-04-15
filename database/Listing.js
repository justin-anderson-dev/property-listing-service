const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const listingSchema = new mongoose.Schema({
  //TODO: define listing schema
  // title: String,
  // author: String,
  // imageUrl: String,
  // body: String,
  // views: {type: Number, default: 0}
},
{
  timestamps: true
}
);

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;

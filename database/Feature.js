const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const featureSchema = new mongoose.Schema({
  //TODO: define features schema
  idString: {type: String, required: true},
  featureTitle: {type: String, required: true},
  featureDescr: {type: String, required: false},
  iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
});

const Feature = mongoose.model('Feature', featureSchema);

module.exports = Feature;

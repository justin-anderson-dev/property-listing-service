const mongoose = require('mongoose');
const db = require('./index.js');

const featureSchema = new mongoose.Schema({
  //TODO: define features schema
  idString: {type: String, required: true},
  featureTitle: {type: String, required: true},
  featureDescr: {type: String, required: false},
  iconUrl: {type: String, default: 'http://localhost:3005/assets/entireHome.svg'}
});

const Feature = mongoose.model('Feature', featureSchema);

module.exports = Feature;

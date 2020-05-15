require('dotenv').config();
const mongoose = require('mongoose');
const db = require('./index.js');
const API_URL = process.env.API_URL;

const featureSchema = new mongoose.Schema({
  //TODO: define features schema
  idString: {type: String, required: true},
  featureTitle: {type: String, required: true},
  featureDescr: {type: String, required: false},
  iconUrl: {type: String, default: API_URL + '/assets/entireHome.svg'}
});

const Feature = mongoose.model('Feature', featureSchema);

module.exports = Feature;

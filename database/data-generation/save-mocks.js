const mongoose = require('mongoose');
const db = require('../index.js');
const Listing = require('../models/Listing.js');
const createMocks = require('./create-mocks');
const LoremIpsum = require('lorem-ipsum').LoremIpsum;

const insertMockData = function() {
  Listing.insertMany(createMocks.mockData)
    .then(() => db.close())
    .catch( (err) => new Error(err));
};


var first = mockData[0];
var last = mockData[mockData.length - 1];

console.log(`First mock listing keys: ${Object.keys(first)}`);
console.log(`Last mock listing keys: ${Object.keys(last)}`);

// console.log(`Adding listings ${first.listingId} - ${last.listingId} to the database`);
insertMockData();
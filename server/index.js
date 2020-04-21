require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const Listings = require('../database/Listing.js');
const Features = require('../database/Feature.js');

const pretty = require('express-prettify');
const app = express();

app.use(bodyParser.json());
app.use(pretty({ query: 'pretty' }));

// app.use(express.static(__dirname + '/../client/dist'));

// GET listing data
app.get('/listings/:id', (req, res) => {
  // res.send(`The id you specified is: ${req.params.id}`);
  Listings.findOne( {listingId: req.params.id} ).exec( (err, listing) => {
    if (err) {
      return new Error(err);
    }
    res.json(listing);
  });
});

// GET features for that listing ?? Need an endpoint for features data

module.exports = app;

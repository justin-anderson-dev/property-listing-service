require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const Listings = require('../database/Listing.js');
const Features = require('../database/Feature.js');

const pretty = require('express-prettify');
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(pretty({ query: 'pretty' }));

app.use(express.static(__dirname + '/../client/dist'));

// GET listing
app.get('/:id', (req, res) => {
  // res.send(`The id you specified is: ${req.params.id}`);
  // actual behavior: get Mongo document with specified id
  Listings.findOne( {listingId: req.params.id} ).exec( (err, listing) => {
    if (err) {
      return new Error(err);
    }
    res.json(listing);
  });
  // send index.html plus mongo doc (as state)?
});

// GET features for that listing ?? or do I send all features data along with the listing to be added to app state?

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// module.exports.server = app.listen(3006);
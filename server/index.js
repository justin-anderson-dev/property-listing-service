const express = require('express');
const bodyParser = require('body-parser');

const Listings = require('../database/Listing.js');
const Features = require('../database/Feature.js');

const app = express();
const PORT = 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

// GET listing
app.get('/:id', (req, res) => {
  res.send(`The id you specified is: ${req.params.id}`);
  // actual behavior: get Mongo document with specified id
  // send index.html plus mongo doc (as state)?
});

// GET features for that listing ?? or do I send all features data along with the listing to be added to app state?

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});



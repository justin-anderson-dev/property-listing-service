/* eslint-disable quotes */
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const Listings = require('../database/Listing.js');
const Features = require('../database/Feature.js');

const pretty = require('express-prettify');
const app = express();

app.use(bodyParser.json());
app.use(pretty({ query: 'pretty' }));

app.use(express.static(__dirname + '/../client/dist'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
//GET root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/not_found.html'));
});
// GET listing page
app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});
// look into sending id as query parameters from client
// bring this up in next team standup
// GET listing data
app.get('/listings/all', (req, res) => {
  // res.send(`The id you specified is: ${req.params.id}`);
  Listings.find( {} )
    .then( listings => {
      res.json(listings);
    })
    .catch( err => new Error(err));
  // need to mongoose.connection.close() here?
});

app.get('/listings/:id', (req, res) => {
  // res.send(`The id you specified is: ${req.params.id}`);
  Listings.findOne( {listingId: req.params.id} )
    .then( listing => res.json(listing))
    .catch( err => new Error(err));
  // need to mongoose.connection.close() here?
});

// GET specific data for all listings (recommendation engine)
app.get('/listings/metadata/all', (req, res) => {
  Listings.find({}, {
    "listingId": 1,
    "location": 1,
    "typeOfRoom": 1,
    "totalBeds": 1,
    "price": 1,
    "stars": 1
  })
    .then( listings => {
      res.json(listings);
    })
    .catch( err => new Error(err));
});

// GET features/[some] for that listing ??
app.get('/features/all', (req, res) => {
  Features.find({})
    .then(featureData => {
      res.json(featureData);
    })
    .catch(err => new Error(err));
});

app.get('/assets/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/assets/' + req.params.id));
});

app.get('/assets/icons/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/assets/icons/' + req.params.id));
});

app.get('/test', (req, res) => {
  res.json({ message: 'pass!' });
});

module.exports = app;

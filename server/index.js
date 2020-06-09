/* eslint-disable quotes */
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const Listings = require('../database/Listing.js');
const Features = require('../database/Feature.js');
const db = require('../database/index.js');

const pretty = require('express-prettify');
const app = express();

app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.json());
app.use(pretty({ query: 'pretty' }));

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

app.use(express.static(__dirname + '/../client/dist'));

// GET listing page
// TODO: Rewrite axios API call in client to check whether id is number or text string
app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// GET listing data
app.get('/listings/all', (req, res) => {
  Listings.find( {} )
    .then( listings => {
      res.json(listings);
    })
    .catch( err => new Error(err));
});

// GET single listing data
// TODO: rewrite to check if id is number or text string, then find by appropriate db field
app.get('/listings/:id', (req, res) => {
  const parsed = Number.parseInt(req.params.id, 10)
  console.log(parsed);
  console.log(req.params.id);
  Listings.findOne( Number.isNaN(parsed) ? {headline: req.params.id} : {listingId: req.params.id} )
    .then( listing => res.json(listing))
    .catch( err => new Error(err));
});

// POST one new listing
app.post('/listings/add/new', (req, res) => {
  console.log(Object.values(req.body));
  var newListing = new Listings(req.body);
  return newListing.save()
    .then(() => res.status(200).send('OK'))
    .catch(err => new Error(err));
});

// GET specific set of data for all listings (recommendation service)
app.get('/listings/metadata/all', (req, res) => {
  Listings.find({}, {
    "listingId": 1,
    "headline": 1,
    "location": 1,
    "typeOfRoom": 1,
    "totalBeds": 1,
    "price": 1,
    "stars": 1,
    "reviews": 1
  })
    .then( listings => {
      res.json(listings);
    })
    .catch( err => new Error(err));
});

// GET features data
app.get('/features/all', (req, res) => {
  Features.find({})
    .then(featureData => {
      res.json(featureData);
    })
    .catch(err => new Error(err));
});

// GET file from '/assets'
app.get('/assets/:id', (req, res) => {
  res.sendFile('listing-service-images.s3-us-west-1.amazonaws.com/assets/' + req.params.id);
});

app.get('/test', (req, res) => {
  res.json({ message: 'pass!' });
});

module.exports = app;

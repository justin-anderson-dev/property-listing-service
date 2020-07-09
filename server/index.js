/* eslint-disable quotes */
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const { getListing, getFeatures, addListing, updateListing, deleteListing } = require('../database_sql/queries');

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
  res.sendFile(path.join(__dirname + '/staticPages/not_found.html'));
});

app.use(express.static(__dirname + '/../client/dist'));

// GET listing page
// TODO: Rewrite axios API call in client to check whether id is number or text string
app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/staticPages/index.html'));
});

// GET all listing data
app.get('/listings/all', (req, res) => {
  res.send('If you think I\'m sending all 10M listings down, you\'re dreaming.');
});

// GET single listing data by listingId or headline
app.get('/listings/:id', (req, res) => {
  getListing(req.params.id, (listing) => {
    res.status(200).json(listing);
  })
});

// POST one new listing
app.post('/listings/add/new', (req, res) => {
  addListing(req.body, (result) => {
    res.status(200).json(result);
  })
});

// PUT / update one existing listing
app.put('/listings/:id/update', (req, res) => {
  updateListing(req.params.id, req.body, (result) => {
    res.status(200).json(result);
  })
});

// DELETE one existing listing
app.delete('/listings/:id/delete', (req, res) => {
  deleteListing(req.params.id, (result) => {
    res.status(200).json(result);
  })
});

// GET features data
app.get('/features/all', (req, res) => {
  getFeatures( (features) => {
    res.status(200).json(features);
  });
});

// GET file from '/assets'
app.get('/assets/:id', (req, res) => {
  res.sendFile('listing-service-images.s3-us-west-1.amazonaws.com/assets/' + req.params.id);
});

app.get('/test', (req, res) => {
  res.json({ message: 'pass!' });
});

module.exports = app;

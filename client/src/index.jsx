import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header.jsx';
import ListingDetail from './components/ListingDetail.jsx';
import Photos from './components/Photos.jsx';
import axios from 'axios';
const Promise = require('bluebird');
const API_URL = 'http://localhost:3005';

const getIdFromUrl = () => {
  let url = window.location.href;
  if (url[url.length - 1] === '/') {
    var id = 'default';
  } else {
    var id = url.slice(-4);
  }
  console.log(`Selected id is: ${id}`);
  return id;
};

const getHostId = () => {
  var listId = getIdFromUrl();
  var hostId = listId[1] !== 0 ? listId.slice(-3) :
    listId[2] !== 0 ? listId.slice(-2) : listId.slice(-1);
  console.log(`Host id is: ${hostId}`);
  return hostId;
};

ReactDom.render(<Header id={getIdFromUrl()} />, document.getElementById('header-component'));

ReactDom.render(<ListingDetail id={getIdFromUrl()} hostId={getHostId()} />, document.getElementById('listing-details'));

// ReactDom.render(<Photos />, document.getElementById('listing-photos'));

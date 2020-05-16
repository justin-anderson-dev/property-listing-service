import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header.jsx';
import ListingDetail from './components/ListingDetail.jsx';

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

ReactDom.render(<Header id={ getIdFromUrl() } />, document.getElementById('header-component'));

ReactDom.render(<ListingDetail id={ getIdFromUrl() } />, document.getElementById('listing-details'));

// ReactDom.render(<Photos />, document.getElementById('listing-photos'));

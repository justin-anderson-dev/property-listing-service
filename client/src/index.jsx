import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header.jsx';
import ListingDetail from './components/ListingDetail.jsx';

const id = window.location.pathname.substring(1);
// console.log(`Selected id is: ${id}`);


ReactDom.render(<Header id={id} />, document.getElementById('header-component'));

ReactDom.render(<ListingDetail id={id} />, document.getElementById('listing-details'));

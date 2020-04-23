import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';

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

ReactDom.render(<App id={getIdFromUrl()}/>, document.getElementById('property-service'));

// defines database query functions for AWS local container
const AWS = require('aws-sdk');

// NOTE: Change endpoint value below for deployment
const dynamodb = new AWS.DynamoDB({
  endpoint: 'http://localhost:8000',
  apiVersion: '2012-08-10',
  region: 'us-west-1'
});

// TODO: Refactor all functions below for aws-sdk equivalents
const getListing = function(id, callback) {
  const parsed = Number.parseInt(id, 10);
  const queryText = Number.isNaN(parsed) ? `SELECT * FROM listings WHERE headline='${id}'` : `SELECT * FROM listings WHERE listing_id=${id}`;

  pool
    .query(queryText)
    .then(listing => callback(listing.rows[0]))
    .catch(err =>  console.error(err));
};

const getFeatures = function(callback) {
  pool
    .query('SELECT * FROM features')
    .then(data => callback(data.rows))
    .catch(err => console.error(err));
};

const addListing = function(data, callback) {
  const cols = Object.keys(data).map(key => `${key}`);
  const values = Object.values(data).map(value => `${value}`);
  pool
    .query(`INSERT INTO listings (${cols}) VALUES (${values}) RETURNING *`)
    .then(response => callback(response.rows[0]))
    .catch(err => console.error(err));
};

const updateListing = function(id, data, callback) {
  const cols = Object.keys(data).map(key => `${key}`);
  const values = Object.values(data).map(value => `${value}`);
  const parsed = Number.parseInt(id, 10);
  const queryText = Number.isNaN(parsed) ? `UPDATE listings SET (${cols}) = ROW(${values}) WHERE headline = '${id}' RETURNING *` : `UPDATE listings SET (${cols}) = ROW(${values}) WHERE listing_id = ${id} RETURNING *`;

  pool
    .query(queryText)
    .then(response => callback(response.rows[0]))
    .catch(err => console.error(err));
};

const deleteListing = function(id, callback) {
  const parsed = Number.parseInt(id, 10);
  const queryText = Number.isNaN(parsed) ? `DELETE FROM listings WHERE headline = '${id}' RETURNING *` : `DELETE FROM listings WHERE listing_id = ${id} RETURNING *`; //WRITE DELETE QUERY

  pool
    .query(queryText)
    .then(response => callback(response.rows[0]))
    .catch(err => console.error(err));
}

module.exports = { getListing, getFeatures, addListing, updateListing, deleteListing };
// defines database query functions for psql property_service
const { pool } = require('./index');

const getListing = function(id, callback) {
  const parsed = Number.parseInt(id, 10);
  const queryText = Number.isNaN(parsed) ? `SELECT * FROM listings WHERE headline=${id}` : `SELECT * FROM listings WHERE listing_id=${id}`;

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
  //TODO: write function that inserts a new row with the input data
};

const updateListing = function(id, callback) {
  //TODO: write function that updates an existing row
};

const deleteListing = function(id, callback) {
  //TODO: write function that deletes an existing row
}

module.exports = { getListing, getFeatures, addListing, updateListing, deleteListing };
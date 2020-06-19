// this file connects to the SQL database and inserts the records created by mockMaker.js
// const sql = require('./db.js');
const mockFile1 = require('./sample-data/samples-1-10000.json');
const path = __dirname + `/sample-data/samples-1-1000.json`;
const fs = require('fs').promises;
const pool = require('./index');

const queryText = `
INSERT INTO listings
('listingId', 'hostId', 'headline', 'price', 'typeOfRoom', 'stars', 'reviews', 'superHost', 'sleepArrangements', 'location', 'totalBeds', 'guestCapacity', 'totalBedrooms', 'totalBaths', 'descriptionText', 'topFeatures', 'keyAmenities', 'allAmenities')
`;

const values = `
(
  1,
  1,
  "Elit do Lorem fugiat do.",
  193,

)
`

const loadMocks = () => {

  // read contents of mockFile
  Promise.resolve(fs.readFile(path))
  .then(fileData => {
    const values = [];
    fileData.forEach(listing => values.push(Object.values(listing)));
    pool.query(queryText, values)
    // use pool.query to insert fileData into listings table
  })
  .catch(err => new Error(err));
  // psql property_service `
  //   insert into listings ETC.

  // close db connection
};


/**
 * From postgres docs on npm:
 * Multiple inserts in one query
 * If you need to insert multiple rows at the same time it's also much faster to do it with a single insert. Simply pass an array of objects to sql().
 *
 * const users = [{
 *   name: 'Murray',
 *   age: 68,
 *   garbage: 'ignore'
 * }, {
 *   name: 'Walter',
 *   age: 78
 * }]
 *
 * sql`
 *   insert into users ${
 *     sql(users, 'name', 'age')
 *   }
 * `
 *
 * So... My existing sample listing generator should work pretty well with few modifications. All single-level properties are fine as they are, and the nested properties can be saved as jsonb data under the top-level headings. Should be fine since they're basically just a bunch of booleans and other primitives.
 */
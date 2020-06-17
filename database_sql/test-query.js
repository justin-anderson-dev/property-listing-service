const { pool, client } = require('./db');

const cols = [
  'listingId',
  'hostId',
  'headline',
  'price',
  'typeOfRoom',
  'stars',
  'reviews',
  'superHost'
];

const row1 = [
  1,
  1,
  'Elit do Lorem fugiat do.',
  193,
  'Entire home',
  3.8,
  543,
  true
];

const query = `
  SELECT *
  FROM listings
`;

const query2 = {
  text: `INSERT INTO listings ("listingId", "hostId", "headline", "price", "typeOfRoom", "stars", "reviews", "superHost", "location") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
  values: [1, 1, 'Elit do Lorem fugiat do.', 193, 'Entire home', 4, 543, true, 'Moscow, Russia'],
};

client.connect().then(() => {
  client.query(query2)
    .then(res => console.log(res.rows[0]))
    .catch(e => console.error(e.stack));
});

// pool.connect()
//   .then((client) => {
//     client.query(query2)
//       .then((res) => {
//         console.log(`inserted something and got back ${Object.keys(res)}`);
//         client.end();
//       })
//       .catch(err => {
//         console.error(err);
//       });
//       // .then(res => {
//       //   let recordsNum = res.rows.length;
//       //   console.log(`returned ${recordsNum} rows`);
//       //   client.end();
//       // })
//       // .catch(err => {
//       //   console.error(err);
//       // });
//     })
//   .catch(err => {
//     console.error(err);
//   });
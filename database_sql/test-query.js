const { pool, client } = require('./db');

const testQueryWithNick = `
INSERT INTO listings
('listingId', 'hostId', 'headline', 'price', 'typeOfRoom', 'stars', 'reviews', 'superHost', 'sleepArrangements', 'location', 'totalBeds', 'guestCapacity', 'totalBedrooms', 'totalBaths', 'descriptionText', 'topFeatures', 'keyAmenities', 'allAmenities')
VALUES (1, 1, "Elit do Lorem fugiat do.", 193, "Entire home", 3.8, 543, true, {"bedroom1":{"exists":true,"queenBed":1}},"Long Beach, California", 4, 6, 1, 3, "Excepteur ex ullamco amet. Excepteur anim non magna qui laborum. Et sit quis magna et esse commodo anim aliqua magna irure minim.\nExcepteur labore consequat dolor nisi culpa deserunt adipisicing. Deserunt reprehenderit elit incididunt mollit nostrud esse. Velit esse occaecat est in sunt velit non laboris mollit dolor. Et quis do voluptate incididunt deserunt excepteur dolor ullamco nisi proident officia. Voluptate ut sunt eu velit mollit qui. Minim ut aliquip laboris dolore dolor voluptate duis laborum nostrud adipisicing labore. Incididunt dolor enim velit ea exercitation in. Voluptate excepteur cillum magna nostrud commodo elit consectetur nostrud.\nMinim in irure ex dolor in voluptate commodo pariatur non. Deserunt Lorem velit laborum dolore officia culpa ea id. Dolore nulla minim laboris culpa.", {"entireHome":true,"selfCheckIn":false,"sparklingClean":false,"freeCancel":false,"greatLocation":true}, {"kitchen":true}, {"basic":{"wifi":false,"cableTv":true,"fireplace":false,"washer":false,"dryer":false,"iron":false,"laptopFriendlyWorkspace":false,"tv":true,"essentials":false,"heating":true,"ethernet":true,"airCon":false,"hotWater":true}}
)
`

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
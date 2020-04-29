const db = require('./index.js');
const Feature = require('./Feature.js');

const featureData = [
  {
    idString: 'entireHome',
    featureTitle: 'Entire home',
    featureDescr: 'You’ll have the space to yourself.',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'selfCheckIn',
    featureTitle: 'Self check-in',
    featureDescr: 'Check yourself in with the lockbox.',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'sparklingClean',
    featureTitle: 'Sparkling clean',
    featureDescr: '8 recent guests said this place was sparkling clean.',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'freeCancel',
    featureTitle: 'Free cancellation for 48 hours',
    featureDescr: 'After that, cancel up to 24 hours before check-in and get a full refund, minus the service fee.',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'superHost',
    featureTitle: 'HOSTNAME is a Superhost',
    featureDescr: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'experiencedHost',
    featureTitle: 'Experienced host',
    featureDescr: 'HOSTNAME has 66 reviews for other places.',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'greatLocation',
    featureTitle: 'Great location',
    featureDescr: '95% of recent guests gave the location a 5-star rating.',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'wifi',
    featureTitle: 'Wifi',
    featureDescr: 'Continuous access in the listing',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'cableTv',
    featureTitle: 'Cable TV',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'fireplace',
    featureTitle: 'Indoor fireplace',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'washer',
    featureTitle: 'Washer',
    featureDescr: 'In the building, free or for a fee',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'dryer',
    featureTitle: 'Dryer',
    featureDescr: 'In the building, free or for a fee',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'iron',
    featureTitle: 'Iron',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'laptopFriendlyWorkspace',
    featureTitle: 'Laptop-friendly workspace',
    featureDescr: 'A table or desk with space for a laptop and a chair that’s comfortable to work in',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'tv',
    featureTitle: 'TV',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'essentials',
    featureTitle: 'Essentials',
    featureDescr: 'Towels, bed sheets, soap, and toilet pap',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'heating',
    featureTitle: 'Heating',
    featureDescr: 'Central heating or a heater in the listing',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'ethernet',
    featureTitle: 'Ethernet connection',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'airCon',
    featureTitle: 'Air conditioning',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'hotWater',
    featureTitle: 'Hot water',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'outletCovers',
    featureTitle: 'Outlet covers',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'bathtub',
    featureTitle: 'Bathtub',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'childDishes',
    featureTitle: 'Children\'s dinnerware',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'packAndPlay',
    featureTitle: 'Pack ’n Play\/travel crib',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'highChair',
    featureTitle: 'High chair',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'crib',
    featureTitle: 'Crib',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'booksAndToys',
    featureTitle: 'Children\'s books and toys',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'roomDark',
    featureTitle: 'Room-darkening shades',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'freeStreetPark',
    featureTitle: 'Free street parking',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'freeParkOnPrem',
    featureTitle: 'Free parking on premises',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'paidParkOnPrem',
    featureTitle: 'Paid parking on premises',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'paidParkOffPrem',
    featureTitle: 'Paid parking off premises',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'pool',
    featureTitle: 'Pool',
    featureDescr: 'Private or shared',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'gym',
    featureTitle: 'Gym',
    featureDescr: 'Free, in the building or nearby',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'hotTub',
    featureTitle: 'Hot tub',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'singleLevel',
    featureTitle: 'Single level home',
    featureDescr: 'No stairs in home',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'kitchen',
    featureTitle: 'Kitchen',
    featureDescr: 'Space where guests can cook their own meals',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'cookingBasics',
    featureTitle: 'Cooking basics',
    featureDescr: 'Pots and pans, oil, salt and pepper',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'oven',
    featureTitle: 'Oven',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'refrigerator',
    featureTitle: 'Refrigerator',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'microwave',
    featureTitle: 'Microwave',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'dishwasher',
    featureTitle: 'Dishwashe',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'dishes',
    featureTitle: 'Dishes and silverware',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'coffeeMaker',
    featureTitle: 'Coffee maker',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'stove',
    featureTitle: 'Stove',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'hostGreets',
    featureTitle: 'Host greets you',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'lockbox',
    featureTitle: 'Lockbox',
    featureDescr: '',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'privateEntrance',
    featureTitle: 'Private entrance',
    featureDescr: 'Separate street or building entrance',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'keypad',
    featureTitle: 'Keypad',
    featureDescr: 'Check yourself into the home with a door code',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'longtermAllowed',
    featureTitle: 'Long term stays allowed',
    featureDescr: 'Allow stay for 28 days or more',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'luggageDropoff',
    featureTitle: 'Luggage dropoff allowed',
    featureDescr: 'For guests\' convenience when they have early arrival or late departure',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'hangers',
    featureTitle: 'Hangers',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'hairDryer',
    featureTitle: 'Hair dryer',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'shampoo',
    featureTitle: 'Shampoo',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'bedLinens',
    featureTitle: 'Bed linens',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'extraBedding',
    featureTitle: 'Extra pillows and blankets',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'bedroomLock',
    featureTitle: 'Lock on bedroom door',
    featureDescr: 'Private room can be locked for safety and privacy',
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'bbqGrill',
    featureTitle: 'BBQ grill',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'gardenYard',
    featureTitle: 'Garden or backyard',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'patioBalcony',
    featureTitle: 'Patio or balcony',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'fireExting',
    featureTitle: 'Fire extinguisher',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'co2Alarm',
    featureTitle: 'Carbon monoxide alarm',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'smokeAlarm',
    featureTitle: 'Smoke alarm',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  },
  {
    idString: 'firstAidKit',
    featureTitle: 'First aid kit',
    featureDescr: null,
    iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
  }
];

const insertFeatureData = function() {
  Feature.create(featureData)
    .then(() => db.close());
};

insertFeatureData();
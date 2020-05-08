const db = require('./index.js');
const Feature = require('./Feature.js');

const featureData = [
  {
    idString: 'entireHome',
    featureTitle: 'Entire home',
    featureDescr: 'You’ll have the space to yourself.',
    iconUrl: 'http://localhost:3005/assets/entireHome.svg'
  },
  {
    idString: 'selfCheckIn',
    featureTitle: 'Self check-in',
    featureDescr: 'Check yourself in with the lockbox.',
    iconUrl: 'http://localhost:3005/assets/selfCheckIn.svg'
  },
  {
    idString: 'sparklingClean',
    featureTitle: 'Sparkling clean',
    featureDescr: '8 recent guests said this place was sparkling clean.',
    iconUrl: 'http://localhost:3005/assets/sparklingClean.svg'
  },
  {
    idString: 'freeCancel',
    featureTitle: 'Free cancellation for 48 hours',
    featureDescr: 'After that, cancel up to 24 hours before check-in and get a full refund, minus the service fee.',
    iconUrl: 'http://localhost:3005/assets/freeCancel.svg'
  },
  {
    idString: 'superHost',
    featureTitle: 'HOSTNAME is a Superhost',
    featureDescr: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
    iconUrl: 'http://localhost:3005/assets/superHost.svg'
  },
  {
    idString: 'experiencedHost',
    featureTitle: 'Experienced host',
    featureDescr: 'HOSTNAME has 66 reviews for other places.',
    iconUrl: 'http://localhost:3005/assets/entireHome.svg'
  },
  {
    idString: 'greatLocation',
    featureTitle: 'Great location',
    featureDescr: '95% of recent guests gave the location a 5-star rating.',
    iconUrl: 'http://localhost:3005/assets/entireHome.svg'
  },
  {
    idString: 'wifi',
    featureTitle: 'Wifi',
    featureDescr: 'Continuous access in the listing',
    iconUrl: 'http://localhost:3005/assets/wifi.svg'
  },
  {
    idString: 'cableTv',
    featureTitle: 'Cable TV',
    featureDescr: null,
    iconUrl: 'http://localhost:3005/assets/cableTv.svg'
  },
  {
    idString: 'fireplace',
    featureTitle: 'Indoor fireplace',
    featureDescr: null,
    iconUrl: 'http://localhost:3005/assets/entireHome.svg'
  },
  {
    idString: 'washer',
    featureTitle: 'Washer',
    featureDescr: 'In the building, free or for a fee',
    iconUrl: 'http://localhost:3005/assets/washer.svg'
  },
  {
    idString: 'dryer',
    featureTitle: 'Dryer',
    featureDescr: 'In the building, free or for a fee',
    iconUrl: 'http://localhost:3005/assets/dryer.svg'
  },
  {
    idString: 'iron',
    featureTitle: 'Iron',
    featureDescr: null,
    iconUrl: 'http://localhost:3005/assets/iron.svg'
  },
  {
    idString: 'laptopFriendlyWorkspace',
    featureTitle: 'Laptop-friendly workspace',
    featureDescr: 'A table or desk with space for a laptop and a chair that’s comfortable to work in',
    iconUrl: 'http://localhost:3005/assets/laptopFriendlyWorkspace.svg'
  },
  {
    idString: 'tv',
    featureTitle: 'TV',
    featureDescr: null,
    iconUrl: 'http://localhost:3005/assets/tv.svg'
  },
  {
    idString: 'essentials',
    featureTitle: 'Essentials',
    featureDescr: 'Towels, bed sheets, soap, and toilet pap',
    iconUrl: 'http://localhost:3005/assets/essentials.svg'
  },
  {
    idString: 'heating',
    featureTitle: 'Heating',
    featureDescr: 'Central heating or a heater in the listing',
    iconUrl: 'http://localhost:3005/assets/heating.svg'
  },
  {
    idString: 'ethernet',
    featureTitle: 'Ethernet connection',
    featureDescr: null,
    iconUrl: 'http://localhost:3005/assets/entireHome.svg'
  },
  {
    idString: 'airCon',
    featureTitle: 'Air conditioning',
    featureDescr: null,
    iconUrl: 'http://localhost:3005/assets/aircon.svg'
  },
  {
    idString: 'hotWater',
    featureTitle: 'Hot water',
    featureDescr: null,
  },
  {
    idString: 'outletCovers',
    featureTitle: 'Outlet covers',
    featureDescr: null,
  },
  {
    idString: 'bathtub',
    featureTitle: 'Bathtub',
    featureDescr: null,
  },
  {
    idString: 'childDishes',
    featureTitle: 'Children\'s dinnerware',
    featureDescr: null,
  },
  {
    idString: 'packAndPlay',
    featureTitle: 'Pack ’n Play\/travel crib',
    featureDescr: null,
  },
  {
    idString: 'highChair',
    featureTitle: 'High chair',
    featureDescr: null,
  },
  {
    idString: 'crib',
    featureTitle: 'Crib',
    featureDescr: null,
  },
  {
    idString: 'booksAndToys',
    featureTitle: 'Children\'s books and toys',
    featureDescr: null,
  },
  {
    idString: 'roomDark',
    featureTitle: 'Room-darkening shades',
    featureDescr: null,
  },
  {
    idString: 'freeStreetPark',
    featureTitle: 'Free street parking',
    featureDescr: null,
  },
  {
    idString: 'freeParkOnPrem',
    featureTitle: 'Free parking on premises',
    featureDescr: null,
    iconUrl: 'http://localhost:3005/freeParkOnPrem.svg'
  },
  {
    idString: 'paidParkOnPrem',
    featureTitle: 'Paid parking on premises',
    featureDescr: null,
  },
  {
    idString: 'paidParkOffPrem',
    featureTitle: 'Paid parking off premises',
    featureDescr: null,
  },
  {
    idString: 'pool',
    featureTitle: 'Pool',
    featureDescr: 'Private or shared',
    iconUrl: 'http://localhost:3005/assets/pool.svg'
  },
  {
    idString: 'gym',
    featureTitle: 'Gym',
    featureDescr: 'Free, in the building or nearby',
    iconUrl: 'http://localhost:3005/assets/gym.svg'
  },
  {
    idString: 'hotTub',
    featureTitle: 'Hot tub',
    featureDescr: null,
  },
  {
    idString: 'singleLevel',
    featureTitle: 'Single level home',
    featureDescr: 'No stairs in home',
  },
  {
    idString: 'kitchen',
    featureTitle: 'Kitchen',
    featureDescr: 'Space where guests can cook their own meals',
    iconUrl: 'http://localhost:3005/assets/kitchen.svg'
  },
  {
    idString: 'cookingBasics',
    featureTitle: 'Cooking basics',
    featureDescr: 'Pots and pans, oil, salt and pepper',
  },
  {
    idString: 'oven',
    featureTitle: 'Oven',
    featureDescr: null,
  },
  {
    idString: 'refrigerator',
    featureTitle: 'Refrigerator',
    featureDescr: null,
  },
  {
    idString: 'microwave',
    featureTitle: 'Microwave',
    featureDescr: null,
  },
  {
    idString: 'dishwasher',
    featureTitle: 'Dishwashe',
    featureDescr: null,
  },
  {
    idString: 'dishes',
    featureTitle: 'Dishes and silverware',
    featureDescr: null,
  },
  {
    idString: 'coffeeMaker',
    featureTitle: 'Coffee maker',
    featureDescr: null,
  },
  {
    idString: 'stove',
    featureTitle: 'Stove',
    featureDescr: null,
  },
  {
    idString: 'hostGreets',
    featureTitle: 'Host greets you',
    featureDescr: null,
  },
  {
    idString: 'lockbox',
    featureTitle: 'Lockbox',
    featureDescr: '',
  },
  {
    idString: 'privateEntrance',
    featureTitle: 'Private entrance',
    featureDescr: 'Separate street or building entrance',
  },
  {
    idString: 'keypad',
    featureTitle: 'Keypad',
    featureDescr: 'Check yourself into the home with a door code',
  },
  {
    idString: 'longtermAllowed',
    featureTitle: 'Long term stays allowed',
    featureDescr: 'Allow stay for 28 days or more',
  },
  {
    idString: 'luggageDropoff',
    featureTitle: 'Luggage dropoff allowed',
    featureDescr: 'For guests\' convenience when they have early arrival or late departure',
  },
  {
    idString: 'hangers',
    featureTitle: 'Hangers',
    featureDescr: null,
  },
  {
    idString: 'hairDryer',
    featureTitle: 'Hair dryer',
    featureDescr: null,
    iconUrl: 'http://localhost.com/assets/hairDryer.svg'
  },
  {
    idString: 'shampoo',
    featureTitle: 'Shampoo',
    featureDescr: null,
  },
  {
    idString: 'bedLinens',
    featureTitle: 'Bed linens',
    featureDescr: null,
  },
  {
    idString: 'extraBedding',
    featureTitle: 'Extra pillows and blankets',
    featureDescr: null,
  },
  {
    idString: 'bedroomLock',
    featureTitle: 'Lock on bedroom door',
    featureDescr: 'Private room can be locked for safety and privacy',
  },
  {
    idString: 'bbqGrill',
    featureTitle: 'BBQ grill',
    featureDescr: null,
  },
  {
    idString: 'gardenYard',
    featureTitle: 'Garden or backyard',
    featureDescr: null,
  },
  {
    idString: 'patioBalcony',
    featureTitle: 'Patio or balcony',
    featureDescr: null,
  },
  {
    idString: 'fireExting',
    featureTitle: 'Fire extinguisher',
    featureDescr: null,
  },
  {
    idString: 'co2Alarm',
    featureTitle: 'Carbon monoxide alarm',
    featureDescr: null,
    iconUrl: 'http://localhost:3005/assets/co2Alarm.svg'
  },
  {
    idString: 'smokeAlarm',
    featureTitle: 'Smoke alarm',
    featureDescr: null,
  },
  {
    idString: 'firstAidKit',
    featureTitle: 'First aid kit',
    featureDescr: null,
  }
];

const insertFeatureData = function() {
  Feature.create(featureData)
    .then(() => db.close());
};

insertFeatureData();
require('dotenv').config();
const S3_URL = process.env.S3_URL;

const featureData = [
  {
    id_string: 'entireHome',
    feature_title: 'Entire home',
    feature_descr: 'You’ll have the space to yourself.',
    icon_url: S3_URL + '/assets/entireHome.svg'
  },
  {
    id_string: 'selfCheckIn',
    feature_title: 'Self check-in',
    feature_descr: 'Check yourself in with the lockbox.',
    icon_url: S3_URL + '/assets/selfCheckIn.svg'
  },
  {
    id_string: 'sparklingClean',
    feature_title: 'Sparkling clean',
    feature_descr: '8 recent guests said this place was sparkling clean.',
    icon_url: S3_URL + '/assets/sparklingClean.svg'
  },
  {
    id_string: 'freeCancel',
    feature_title: 'Free cancellation for 48 hours',
    feature_descr: 'After that, cancel up to 24 hours before check-in and get a full refund, minus the service fee.',
    icon_url: S3_URL + '/assets/freeCancel.svg'
  },
  {
    id_string: 'superHost',
    feature_title: 'HOSTNAME is a Superhost',
    feature_descr: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
    icon_url: S3_URL + '/assets/superHost.svg'
  },
  {
    id_string: 'experiencedHost',
    feature_title: 'Experienced host',
    feature_descr: 'HOSTNAME has 66 reviews for other places.',
    icon_url: S3_URL + '/assets/entireHome.svg'
  },
  {
    id_string: 'greatLocation',
    feature_title: 'Great location',
    feature_descr: '95% of recent guests gave the location a 5-star rating.',
    icon_url: S3_URL + '/assets/entireHome.svg'
  },
  {
    id_string: 'wifi',
    feature_title: 'Wifi',
    feature_descr: 'Continuous access in the listing',
    icon_url: S3_URL + '/assets/wifi.svg'
  },
  {
    id_string: 'cableTv',
    feature_title: 'Cable TV',
    feature_descr: null,
    icon_url: S3_URL + '/assets/cableTv.svg'
  },
  {
    id_string: 'fireplace',
    feature_title: 'Indoor fireplace',
    feature_descr: null,
    icon_url: S3_URL + '/assets/entireHome.svg'
  },
  {
    id_string: 'washer',
    feature_title: 'Washer',
    feature_descr: 'In the building, free or for a fee',
    icon_url: S3_URL + '/assets/washer.svg'
  },
  {
    id_string: 'dryer',
    feature_title: 'Dryer',
    feature_descr: 'In the building, free or for a fee',
    icon_url: S3_URL + '/assets/dryer.svg'
  },
  {
    id_string: 'iron',
    feature_title: 'Iron',
    feature_descr: null,
    icon_url: S3_URL + '/assets/iron.svg'
  },
  {
    id_string: 'laptopFriendlyWorkspace',
    feature_title: 'Laptop-friendly workspace',
    feature_descr: 'A table or desk with space for a laptop and a chair that’s comfortable to work in',
    icon_url: S3_URL + '/assets/laptopFriendlyWorkspace.svg'
  },
  {
    id_string: 'tv',
    feature_title: 'TV',
    feature_descr: null,
    icon_url: S3_URL + '/assets/tv.svg'
  },
  {
    id_string: 'essentials',
    feature_title: 'Essentials',
    feature_descr: 'Towels, bed sheets, soap, and toilet pap',
    icon_url: S3_URL + '/assets/essentials.svg'
  },
  {
    id_string: 'heating',
    feature_title: 'Heating',
    feature_descr: 'Central heating or a heater in the listing',
    icon_url: S3_URL + '/assets/heating.svg'
  },
  {
    id_string: 'ethernet',
    feature_title: 'Ethernet connection',
    feature_descr: null,
    icon_url: S3_URL + '/assets/entireHome.svg'
  },
  {
    id_string: 'airCon',
    feature_title: 'Air conditioning',
    feature_descr: null,
    icon_url: S3_URL + '/assets/aircon.svg'
  },
  {
    id_string: 'hotWater',
    feature_title: 'Hot water',
    feature_descr: null,
  },
  {
    id_string: 'outletCovers',
    feature_title: 'Outlet covers',
    feature_descr: null,
  },
  {
    id_string: 'bathtub',
    feature_title: 'Bathtub',
    feature_descr: null,
  },
  {
    id_string: 'childDishes',
    feature_title: 'Children’s dinnerware',
    feature_descr: null,
  },
  {
    id_string: 'packAndPlay',
    feature_title: 'Pack ’n Play\/travel crib',
    feature_descr: null,
  },
  {
    id_string: 'highChair',
    feature_title: 'High chair',
    feature_descr: null,
  },
  {
    id_string: 'crib',
    feature_title: 'Crib',
    feature_descr: null,
  },
  {
    id_string: 'booksAndToys',
    feature_title: 'Children’s books and toys',
    feature_descr: null,
  },
  {
    id_string: 'roomDark',
    feature_title: 'Room-darkening shades',
    feature_descr: null,
  },
  {
    id_string: 'freeStreetPark',
    feature_title: 'Free street parking',
    feature_descr: null,
  },
  {
    id_string: 'freeParkOnPrem',
    feature_title: 'Free parking on premises',
    feature_descr: null,
    icon_url: S3_URL + '/assets/freeParkOnPrem.svg'
  },
  {
    id_string: 'paidParkOnPrem',
    feature_title: 'Paid parking on premises',
    feature_descr: null,
  },
  {
    id_string: 'paidParkOffPrem',
    feature_title: 'Paid parking off premises',
    feature_descr: null,
  },
  {
    id_string: 'pool',
    feature_title: 'Pool',
    feature_descr: 'Private or shared',
    icon_url: S3_URL + '/assets/pool.svg'
  },
  {
    id_string: 'gym',
    feature_title: 'Gym',
    feature_descr: 'Free, in the building or nearby',
    icon_url: S3_URL + '/assets/gym.svg'
  },
  {
    id_string: 'hotTub',
    feature_title: 'Hot tub',
    feature_descr: null,
  },
  {
    id_string: 'singleLevel',
    feature_title: 'Single level home',
    feature_descr: 'No stairs in home',
  },
  {
    id_string: 'kitchen',
    feature_title: 'Kitchen',
    feature_descr: 'Space where guests can cook their own meals',
    icon_url: S3_URL + '/assets/kitchen.svg'
  },
  {
    id_string: 'cookingBasics',
    feature_title: 'Cooking basics',
    feature_descr: 'Pots and pans, oil, salt and pepper',
  },
  {
    id_string: 'oven',
    feature_title: 'Oven',
    feature_descr: null,
  },
  {
    id_string: 'refrigerator',
    feature_title: 'Refrigerator',
    feature_descr: null,
  },
  {
    id_string: 'microwave',
    feature_title: 'Microwave',
    feature_descr: null,
  },
  {
    id_string: 'dishwasher',
    feature_title: 'Dishwashe',
    feature_descr: null,
  },
  {
    id_string: 'dishes',
    feature_title: 'Dishes and silverware',
    feature_descr: null,
  },
  {
    id_string: 'coffeeMaker',
    feature_title: 'Coffee maker',
    feature_descr: null,
  },
  {
    id_string: 'stove',
    feature_title: 'Stove',
    feature_descr: null,
  },
  {
    id_string: 'hostGreets',
    feature_title: 'Host greets you',
    feature_descr: null,
  },
  {
    id_string: 'lockbox',
    feature_title: 'Lockbox',
    feature_descr: '',
  },
  {
    id_string: 'privateEntrance',
    feature_title: 'Private entrance',
    feature_descr: 'Separate street or building entrance',
  },
  {
    id_string: 'keypad',
    feature_title: 'Keypad',
    feature_descr: 'Check yourself into the home with a door code',
  },
  {
    id_string: 'longtermAllowed',
    feature_title: 'Long term stays allowed',
    feature_descr: 'Allow stay for 28 days or more',
  },
  {
    id_string: 'luggageDropoff',
    feature_title: 'Luggage dropoff allowed',
    feature_descr: 'For guests’ convenience when they have early arrival or late departure',
  },
  {
    id_string: 'hangers',
    feature_title: 'Hangers',
    feature_descr: null,
  },
  {
    id_string: 'hairDryer',
    feature_title: 'Hair dryer',
    feature_descr: null,
    icon_url: S3_URL + '/assets/hairDryer.svg'
  },
  {
    id_string: 'shampoo',
    feature_title: 'Shampoo',
    feature_descr: null,
  },
  {
    id_string: 'bedLinens',
    feature_title: 'Bed linens',
    feature_descr: null,
  },
  {
    id_string: 'extraBedding',
    feature_title: 'Extra pillows and blankets',
    feature_descr: null,
  },
  {
    id_string: 'bedroomLock',
    feature_title: 'Lock on bedroom door',
    feature_descr: 'Private room can be locked for safety and privacy',
  },
  {
    id_string: 'bbqGrill',
    feature_title: 'BBQ grill',
    feature_descr: null,
  },
  {
    id_string: 'gardenYard',
    feature_title: 'Garden or backyard',
    feature_descr: null,
  },
  {
    id_string: 'patioBalcony',
    feature_title: 'Patio or balcony',
    feature_descr: null,
  },
  {
    id_string: 'fireExting',
    feature_title: 'Fire extinguisher',
    feature_descr: null,
  },
  {
    id_string: 'co2Alarm',
    feature_title: 'Carbon monoxide alarm',
    feature_descr: null,
    icon_url: S3_URL + '/assets/co2Alarm.svg'
  },
  {
    id_string: 'smokeAlarm',
    feature_title: 'Smoke alarm',
    feature_descr: null,
  },
  {
    id_string: 'firstAidKit',
    feature_title: 'First aid kit',
    feature_descr: null,
  }
];

module.exports = featureData;
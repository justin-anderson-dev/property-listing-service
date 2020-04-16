const db = require('./index.js');
const Listing = require('./Listing.js');

const sampleListings = [
  {
    hostId: 1,
    headline: 'Bright & Airy in Highland Park',
    location: {
      neighborhood: 'Cypress Hills',
      city: 'Brooklyn',
      State: 'New York'
    },
    guestCapacity: 3,
    totalBedrooms: 2,
    totalBeds: 2,
    totalBaths: 1,
    coreAmenities: [
      {
        amenityTitle: 'Entire home',
        amenityDescr: 'You’ll have the apartment to yourself.',
        iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
      },
      {
        amenityTitle: 'Self check-in',
        amenityDescr: 'Check yourself in with the lockbox.',
        iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
      },
      {
        amenityTitle: 'Sparkling clean',
        amenityDescr: '8 recent guests said this place was sparkling clean.',
        iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
      },
      {
        amenityTitle: 'Graziella is a Superhost',
        amenityDescr: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
        iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
      }
    ],
    allAmenities: {
      basic: [
        {
          amenityTitle: 'Wifi',
          amenityDescr: 'Continuous access in the listing',
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
        {
          amenityTitle: 'Washer',
          amenityDescr: 'In the building, free or for a fee',
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
        {
          amenityTitle: 'Dryer',
          amenityDescr: 'In the building, free or for a fee',
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
        {
          amenityTitle: 'Iron',
          amenityDescr: null,
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
        {
          amenityTitle: 'TV',
          amenityDescr: null,
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
        {
          amenityTitle: 'Essentials',
          amenityDescr: 'Towels, bed sheets, soap, and toilet paper',
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
        {
          amenityTitle: 'Heating',
          amenityDescr: 'Central heating or a heater in the listing',
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
        {
          amenityTitle: 'Air conditioning',
          amenityDescr: null,
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
        {
          amenityTitle: 'Hot water',
          amenityDescr: null,
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
      ],
      familyFeatures: [
        {
          amenityTitle: 'Outlet covers',
          amenityDescr: null,
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
      ],
      facilities: [
        {
          amenityTitle: 'Free street parking',
          amenityDescr: null,
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        }
      ],
      dining: [
        {
          amenityTitle: 'Kitchen',
          amenityDescr: 'Space where guests can cook their own meals',
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
        {
          amenityTitle: 'Coffee maker',
          amenityDescr: null,
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
        {
          amenityTitle: 'Cooking basics',
          amenityDescr: 'Pots and pans, oil, salt and pepper',
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
        {
          amenityTitle: 'Dishes and silverware',
          amenityDescr: null,
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
        {
          amenityTitle: 'Dishwasher',
          amenityDescr: null,
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
        {
          amenityTitle: 'Microwave',
          amenityDescr: null,
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
        {
          amenityTitle: 'Refrigerator',
          amenityDescr: null,
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
        {
          amenityTitle: 'Oven',
          amenityDescr: null,
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        },
        {
          amenityTitle: 'Stove',
          amenityDescr: null,
          iconUrl: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'
        }
      ],
      guestAccess: [
        {
          amenityTitle: 'Lockbox',
          amenityDescr: null,
          iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
        }
      ],
      logistics: [
        {
          amenityTitle: 'Long term stays allowed',
          amenityDescr: 'Allow stay for 28 days or more',
          iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
        }
      ],
      bedAndBath: [
        {
          amenityTitle: 'Hangers',
          amenityDescr: null,
          iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
        },
        {
          amenityTitle: 'Hair dryer',
          amenityDescr: null,
          iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
        },
        {
          amenityTitle: 'Shampoo',
          amenityDescr: null,
          iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
        },
        {
          amenityTitle: 'Bed linens',
          amenityDescr: null,
          iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
        },
        {
          amenityTitle: 'Extra pillows and blankets',
          amenityDescr: null,
          iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
        }
      ],
      safetyFeatures: [
        {
          amenityTitle: 'Fire extinguisher',
          amenityDescr: null,
          iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
        },
        {
          amenityTitle: 'Carbon monoxide alarm',
          amenityDescr: null,
          iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
        },
        {
          amenityTitle: 'Smoke alarm',
          amenityDescr: null,
          iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
        },
        {
          amenityTitle: 'First aid kit',
          amenityDescr: null,
          iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
        }
      ],
      notIncluded: [
        {
          amenityTitle: 'Private entrance',
          amenityDescr: null,
          iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
        }
      ]
    },
    descriptionText: `
      My spacious two-bedroom home has everything you need for your NYC trip. On the first floor, but set above street level, I am offering two bedrooms, bathroom, kitchen with a dining/living area, plus ROKU tv, WIFI, and washer/dryer. While Brooklyn is very large, I am walking distance to several major train/bus routes that run into Manhattan for all the popular sites: Freedom Tower, the Metropolitan Museum of Art, Times Square. There is so much culture and excitement to be experienced!

      The space

      Both bedrooms are very quiet, as they are located in the rear of the house. The first bedroom has a queen-size bed, and the second bedroom has a twin size bed. The new bathroom has a large shower, but no tub, with strong water pressure. The kitchen/living/dining area are set in an open plan setup. French doors that open to a sunroom separate open plan kitchen/dining/living area. The sunroom is shared with me who has my own entrance. It is stocked with many types of plants to create a truly alive and lush area.

      Cats and one dog have and continue to live on this site. They live with the host an do sit in the shared sunrooms. No matter how much preparation, if you are sensitive to pets this place is probably isn't the best choice.

      Guest access

      Guest have access to the entire first floor of the home. The front room is shared with the owner. There are doors (with lock) that separate the two sections for security. Guests are welcome to use that area at any time. Upon your exit of the shared sun-room please remember to lock your doors and to leave it as it was found.

      Other things to note

      NYC may be the city that ever sleeps but it certainly slows down on the weekends. On top of the reduced train schedules, there are the ever-present repairs which can further slow you down. Finally, Brooklyn is a big place and I am on one end and Manhattan across a river on the other. Until transporters (ala Star Trek) become commonplace, please allow yourself plenty of time to get from point 'A' to point 'B'.
    `,
    sleepArrangements: [
      {
        roomName: 'Bedroom 1',
        bedInfo: ['1 queen bed']
      },
      {
        roomName: 'Bedroom 2',
        bedInfo: ['1 single bed']
      },
    ]
  }
];

const insertSampleListings = function() {
  Listing.create(sampleListings)
    .then(() => db.disconnect());
};

insertSampleListings();
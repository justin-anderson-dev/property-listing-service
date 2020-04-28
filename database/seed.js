const mongoose = require('mongoose');
const db = require('./index.js');
const Listing = require('./Listing.js');

const sampleListings = [
  {
    listingId: 1001,
    hostId: 1,
    price: 50,
    headline: 'Bright & Airy in Highland Park',
    stars: 4.98,
    reviews: 43,
    superHost: true,
    location: {
      neighborhood: 'Cypress Hills',
      city: 'Brooklyn',
      State: 'New York'
    },
    subHeadline: 'Entire apartment hosted by Graziella',
    guestCapacity: 3,
    totalBedrooms: 2,
    totalBeds: 2,
    totalBaths: 1,
    topFeatures: {
      entireHome: true,
      selfCheckIn: true,
      sparklingClean: true,
      superHost: true
    },
    keyAmenities: {
      kitchen: true,
      wifi: true,
      washer: true,
      dryer: true,
      iron: true,
      laptopFriendlyWorkspace: true,
      tv: true,
      hangers: true,
      hairDryer: true,
      essentials: true
    },
    allAmenities: {
      basic: {
        wifi: true,
        washer: true,
        dryer: true,
        iron: true,
        tv: true,
        essentials: true,
        heating: true,
        airCon: true,
        hotWater: true
      },
      familyFeatures: {
        outletCovers: true
      },
      facilities: {
        freeStreetPark: true
      },
      dining: {
        kitchen: true,
        coffeeMaker: true,
        cookingBasics: true,
        dishwasher: true,
        dishes: true,
        refrigerator: true,
        microwave: true,
        oven: true,
        stove: true
      },
      guestAccess: {
        lockbox: true,
      },
      logistics: {
        longtermAllowed: true
      },
      bedAndBath: {
        hangers: true,
        hairDryer: true,
        shampoo: true,
        bedLinens: true,
        extraBedding: true
      },
      safetyFeatures: {
        fireExting: true,
        co2Alarm: true,
        smokeAlarm: true,
        firstAidKit: true
      },
      notIncluded: {
        privateEntrance: true
      }
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
    sleepArrangements: {
      bedroom1: {
        exists: true,
        queenBed: 1
      },
      bedroom2: {
        exists: true,
        twinBed: 1
      }
    }
  },
  {
    listingId: 1002,
    hostId: 2,
    price: 140,
    headline: 'The Kiva Cave Creek',
    stars: 4.96,
    reviews: 209,
    superHost: true,
    location: {
      neighborhood: null,
      city: 'Cave Creek',
      State: 'Arizona'
    },
    subHeadline: 'Earth house hosted by Sarah',
    guestCapacity: 4,
    totalBedrooms: 2,
    totalBeds: 2,
    totalBaths: 1,
    topFeatures: {
      entireHome: true,
      sparklingClean: true,
      superHost: true,
      freeCancel: true
    },
    keyAmenities: {
      kitchen: true,
      wifi: true,
      freeParkOnPrem: true,
      tv: true,
      laptopFriendlyWorkspace: true,
      iron: true,
      essentials: true,
      hangers: true,
      airCon: true
    },
    allAmenities: {
      basic: {
        wifi: true,
        tv: true,
        laptopFriendlyWorkspace: true,
        iron: true,
        essentials: true,
        airCon: true,
        heating: true,
        hotWater: true
      },
      facilities: {
        freeParkOnPrem: true
      },
      dining: {
        kitchen: true,
        refrigerator: true,
        dishwasher: true,
        cookingBasics: true,
        stove: true,
        dishes: true,
        oven: true,
        coffeeMaker: true,
        microwave: true
      },
      bedAndBath: {
        hangers: true,
        shampoo: true
      },
      outdoor: {
        patioBalcony: true,
        gardenYard: true,
        bbqGrill: true
      },
      safetyFeatures: {
        smokeAlarm: true
      },
      notIncluded: {
        washer: true,
        hairDryer: true,
        privateEntrance: true,
        co2Alarm: true
      }
    },
    descriptionText: `
    We invite you to stay in our one-of-a-kind underground "kiva"... This home is located on a private 1/4 acre lot, wonderful outdoor living space, and great location.

    The space
    This home is on a private 1/4 acre, 10 ft ceilings, sleeping loft, Indian flagstone floors, watch the sunrise from your bed. There is a Smart TV with Chromecast at the home, come to relax, renew and enjoy the beauty of the Sonoran Desert.

    Guest access
    Walking trails, private driveway, outdoor fire pit and bbq.
    `
  },
  {
    listingId: 1003,
    hostId: 3,
    price: 229,
    headline: 'Brooklyn Heights 1 Bed Floorthru 950ft Garden Apt',
    stars: 4.97,
    reviews: 39,
    superHost: true,
    location: {
      neighborhood: null,
      city: 'Brooklyn',
      State: 'New York'
    },
    subHeadline: 'Entire apartment hosted by Alex',
    guestCapacity: 4,
    totalBedrooms: 1,
    totalBeds: 1,
    totalBaths: 1,
    topFeatures: {
      entireHome: true,
      sparklingClean: true,
      superHost: true,
      freeCancel: true
    },
    keyAmenities: {
      kitchen: true,
      wifi: true,
      cableTv: true,
      laptopFriendlyWorkspace: true,
      tv: true,
      hangers: true,
      hairDryer: true,
      essentials: true,
      heating: true,
      airCon: true
    },
    allAmenities: {
      basic: {
        wifi: true,
        cableTv: true,
        laptopFriendlyWorkspace: true,
        tv: true,
        essentials: true,
        heating: true,
        airCon: true,
        hotWater: true
      },
      facilities: {
        freeStreetPark: true
      },
      dining: {
        kitchen: true,
        coffeeMaker: true,
        dishes: true,
        dishwasher: true,
        refrigerator: true,
        microwave: true,
        stove: true
      },
      guestAccess: {
        privateEntrance: true
      },
      bedAndBath: {
        hangers: true,
        hairDryer: true,
        shampoo: true,
        bedLinens: true
      },
      safetyFeatures: {
        smokeAlarm: true,
        fireExting: true,
        co2Alarm: true
      },
      notIncluded: {
        washer: true,
      }
    },
    descriptionText: `
      Located on a 1 block long very quiet road in Brooklyn Heights this full floor garden level 1 bedroom apartment with own private entrance of 950sq ft sleeps 4. the townhouse dates to 1846 in the Greek Revival Style of architecture.
      Features include: windowed bathroom; central heat & AC; brand new renovated bathroom & kitchen with new appliances; 2 exposures (east & west) from 6 windows.

      The space
      Very quiet as located on a 'Place' block & only 1 block long so no through traffic.
    `,
    sleepArrangements: {
      bedroom1: {
        exists: true,
        queenBed: 1
      },
      commonRooms: {
        exists: true,
        sofaBed: 2
      }
    }
  },
  {
    listingId: 1004,
    hostId: 4,
    price: 109,
    headline: 'The Beach Studio',
    stars: 4.77,
    reviews: 291,
    superHost: false,
    location: {
      neighborhood: null,
      city: 'Long Beach',
      State: 'California'
    },
    subHeadline: 'Entire house hosted by Dorothy',
    guestCapacity: 2,
    totalBedrooms: 0,
    totalBeds: 1,
    totalBaths: 1,
    topFeatures: {
      entireHome: true,
      selfCheckIn: true,
      sparklingClean: true,
      freeCancel: true
    },
    keyAmenities: {
      kitchen: true,
      wifi: true,
      pool: true,
      laptopFriendlyWorkspace: true,
      iron: true,
      hangers: true,
      hairDryer: true,
      tv: true,
      airCon: true,
      essentials: true
    },
    allAmenities: {
      basic: {
        wifi: true,
        laptopFriendlyWorkspace: true,
        iron: true,
        tv: true,
        airCon: true,
        essentials: true,
        heating: true,
        hotWater: true
      },
      facilities: {
        pool: true,
        freeStreetPark: true,
        singleLevel: true
      },
      dining: {
        kitchen: true,
        dishes: true,
        coffeeMaker: true,
        cookingBasics: true,
        stove: true,
        refrigerator: true,
        microwave: true
      },
      guestAccess: {
        keypad: true,
        privateEntrance: true
      },
      bedAndBath: {
        hangers: true,
        hairDryer: true,
        shampoo: true,
        bedLinens: true
      },
      outdoor: {
        gardenYard: true,
        patioBalcony: true
      },
      safetyFeatures: {
        co2Alarm: true,
        fireExting: true,
        firstAidKit: true,
        smokeAlarm: true
      },
      notIncluded: {
        washer: true,
      }
    },
    descriptionText: `
      The Beach Studio is a beautifully renovated studio guest house, with an oversized modern tiled shower and fully functional kitchenette. There is a gorgeous shared larger outdoor courtyard, with Spanish architecture and splash pool. There is a commissioned mural, succulent wall, and a fire pit. Light-filled, with plants, and lots of funky art work. There is one queen sized bed, and one full-size couch.

      Please NO EXTRA GUESTS (MAXIMUM IS 2), NO PHOTO SHOOTS, NO PARTIES/EVENTS.

      The space
      This space is a classic Spanish style house built in 1932, but has been completely renovated with all new everything. We are nestled in the heart of the historic Wrigley neighborhood in Long Beach. A minibar with fridge, microwave, and coffee maker, crisp linens (hypoallergenic), towels, games, and Netflix await you. You'll find coffee, tea, water, and some rotating treats floating around. You'll also love the 48 inch Smart LED television. There is one queen bed. Get to downtown, the beach, Bixby Knolls, Cal Heights or Belmont Shore within minutes. Several culturally diverse restaurants with fantastic food, and amazing coffee shops, sprinkled around the neighborhood just a short drive away.

      Guest access
      -The Beach Studio is a guest house detached from a front main house, and also shares use of the main large backyard as well.
      -The pool and fire pit are common areas, and you can use them at any time.
      -You will be given a temporary access code for the door prior to your arrival.
      -There is plenty of street parking available right outside.

      Other things to note
      1) There is an airbnb called "The Spanish House" which is on the front of the house. This is totally separate with it's own entrance.
      3) The main backyard is a common area, for all guests to share and use the pool, and fire pit.
      4) The pool guy comes early Friday mornings for 15 minute maintenance.
      5) The gardeners come Wednesdays for 1 hour maintenance.
      9) PARKING: STREET PARKING ONLY! There is plenty of street parking available in the front of the house.
    `,
    sleepArrangements: {
      commonRooms: {
        exists: true,
        queenBed: 1,
        sofaBed: 1
      }
    }
  },
  {
    listingId: 1005,
    hostId: 5,
    price: 50,
    headline: 'PRIVATE STUDIO on a budget, Pool, Laundry',
    stars: 4.81,
    reviews: 511,
    superHost: true,
    location: {
      neighborhood: null,
      city: 'Los Angeles',
      State: 'California'
    },
    subHeadline: 'Private room in a house hosted by Janna',
    guestCapacity: 2,
    totalBedrooms: 1,
    totalBeds: 1,
    totalBaths: 1,
    topFeatures: {
      sparklingClean: true,
      superHost: true,
      freeCancel: true
    },
    keyAmenities: {
      wifi: true,
      pool: true,
      cableTv: true,
      fireplace: true,
      laptopFriendlyWorkspace: true,
      iron: true,
      dryer: true,
      hangers: true,
      washer: true,
      hairDryer: true
    },
    allAmenities: {
      basic: {
        wifi: true,
        cableTv: true,
        fireplace: true,
        laptopFriendlyWorkspace: true,
        iron: true,
        dryer: true,
        washer: true,
        tv: true,
        airCon: true,
        essentials: true,
        heating: true,
        ethernet: true,
        hotWater: true
      },
      facilities: {
        pool: true,
        freeStreetPark: true
      },
      dining: {
        cookingBasics: true,
        coffeeMaker: true,
        microwave: true,
        dishes: true,
        refrigerator: true
      },
      guestAccess: {
        privateEntrance: true,
        hostGreets: true
      },
      logistics: {
        luggageDropoff: true
      },
      bedAndBath: {
        hangers: true,
        hairDryer: true,
        shampoo: true,
        extraBedding: true,
        bedroomLock: true,
        bedLinens: true
      },
      outdoor: {
        gardenYard: true,
        patioBalcony: true
      },
      safetyFeatures: {
        fireExting: true,
        co2Alarm: true,
        firstAidKit: true,
        smokeAlarm: true
      },
      notIncluded: {
        kitchen: true,
      }
    },
    descriptionText: `
      Welcome to our house! Centrally located in historic Hancock Park, we just short drive away from Hollywood Attractions, Beverly Hills, Grove Shopping Center, Universal Studio, Downtown and Great Museums!
      You will be within walking distance to great restaurants, cafes and food markets.

      The space
      Located on a first floor of the house, studio is completely PRIVATE. You will have your own key entrance, bedroom, ‘en-suite’ bathroom, washer/ dryer and small kitchenette. You’ll have the space to yourself and will only share it with those you’re traveling with.
      Kitchenette has a coffee machine, microwave, mini fridge, electric water kettle, toaster, and all necessary dishes and glasses.
      You have full access of the back yard and the pool area to enjoy the warm LA weather and over sized pool.
      If you rent a car, you can park on a street in front of our house (a lot of unlimited, unrestricted parking 24/7.
      Enjoy your vacation on a budget. ADULTS ONLY!

      Guest access
      Outdoor patio, big swimming pool
      Washer/dryer with complimentary detergent
      Complimentary Coffee, Tea
      Complimentary Spa Amenities, Hair dryer & Hair Style products
      WI-FI

      Other things to note
      **NO PARTIES, OR EVENTS.
      **WE CAN NOT ACCOMMODATE ADDITIONAL VISITORS-
      If you are joining friends please plan to meet them OFF-SITE.
      ***Please, be respectful during your stay, lowering music and loud speaking by 11 pm.
      **ADULTS ONLY
      ** Room is SMALL, but has 2 big windows & Quinn size bed:)
      *Pool and backyard are shared with other guests.

      License number
      HSR19-000397
    `,
    sleepArrangements: {
      bedroom1: {
        exists: true,
        queenBed: 1
      }
    }
  }
];

const insertSampleListings = function() {
  Listing.create(sampleListings)
    .then(() => mongoose.connection.close()); // check this
};

insertSampleListings();
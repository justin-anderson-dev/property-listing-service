const mongoose = require('mongoose');
const db = require('./index.js');
const Listing = require('./Listing.js');
const sampleListings = require('./sample-listings').sampleListings;
const LoremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 2
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const randomLocation = ['Los Angeles, California', 'Long Beach, California', 'Brooklyn, New York', 'Cave Creek, Arizona', 'Napa, California', 'Boston, Massachusetts', 'Naples, Florida'];

const randomRoomType = ['Entire apartment', 'Entire home', 'Private room', 'Shared room', 'Entire guesthouse', 'Entire cottage'];

const generateRandomInteger = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomRating = function() {
  var precision = 100;
  var randomNum = Math.floor(Math.random() * (5 * precision - 3 * precision) + 3 * precision) / (1 * precision);
  return randomNum;
};

const createMockListings = function() {
  var storage;
  for (var i = 7; i < 120; i++) {
    storage = {
    // listing model goes here
      listingId: 1000 + i,
      hostId: i,
      price: generateRandomInteger(50, 299),
      typeOfRoom: randomRoomType[Math.round(Math.random() * 5)],
      headline: lorem.generateSentences(1),
      stars: generateRandomRating(),
      reviews: Math.round(Math.random() * 1000),
      superHost: Math.random() >= 0.8,
      location: randomLocation[Math.round(Math.random() * 6)],
      subHeadline: lorem.generateSentences(1),
      guestCapacity: generateRandomInteger(2, 9),
      totalBedrooms: generateRandomInteger(1, 4),
      totalBeds: generateRandomInteger(1, 4),
      totalBaths: generateRandomInteger(1, 3),
      topFeatures: {
        entireHome: Math.random() >= 0.6,
        selfCheckIn: Math.random() >= 0.6,
        sparklingClean: Math.random() >= 0.3,
        freeCancel: Math.random() >= 0.3,
        experiencedHost: false,
        superHost: Math.random() >= 0.8,
        greatLocation: Math.random() >= 0.6
      },
      keyAmenities: {
        kitchen: Math.random() >= 0.6,
        wifi: Math.random() >= 0.3,
        cableTv: Math.random() >= 0.6,
        fireplace: Math.random() >= 0.8,
        washer: Math.random() >= 0.6,
        dryer: Math.random() >= 0.6,
        iron: Math.random() >= 0.6,
        laptopFriendlyWorkspace: Math.random() >= 0.6,
        tv: Math.random() >= 0.6,
        hangers: Math.random() >= 0.6,
        hairDryer: Math.random() >= 0.6,
        essentials: Math.random() >= 0.6,
        freeParkOnPrem: Math.random() >= 0.6,
        heating: Math.random() >= 0.3,
        airCon: Math.random() >= 0.3,
        co2Alarm: Math.random() >= 0.6,
        gym: Math.random() >= 0.6,
        hotTub: Math.random() >= 0.8,
        pool: Math.random() >= 0.8
      },
      allAmenities: {
        basic: {
          wifi: Math.random() >= 0.6,
          cableTv: Math.random() >= 0.6,
          fireplace: Math.random() >= 0.6,
          washer: Math.random() >= 0.6,
          dryer: Math.random() >= 0.6,
          iron: Math.random() >= 0.6,
          laptopFriendlyWorkspace: Math.random() >= 0.6,
          tv: Math.random() >= 0.6,
          essentials: Math.random() >= 0.6,
          heating: Math.random() >= 0.6,
          ethernet: Math.random() >= 0.6,
          airCon: Math.random() >= 0.6,
          hotWater: true
        },
        familyFeatures: {
          outletCovers: Math.random() >= 0.6,
          bathtub: Math.random() >= 0.6,
          childDishes: Math.random() >= 0.8,
          packAndPlay: Math.random() >= 0.8,
          highChair: Math.random() >= 0.8,
          crib: Math.random() >= 0.8,
          booksAndToys: Math.random() >= 0.8,
          roomDark: Math.random() >= 0.6
        },
        facilities: {
          freeStreetPark: Math.random() >= 0.6,
          freeParkOnPrem: Math.random() >= 0.6,
          paidParkOnPrem: Math.random() >= 0.6,
          paidParkOffPrem: Math.random() >= 0.6,
          pool: Math.random() >= 0.6,
          gym: Math.random() >= 0.6,
          hotTub: Math.random() >= 0.6,
          singleLevel: Math.random() >= 0.8
        },
        dining: {
          kitchen: Math.random() >= 0.6,
          cookingBasics: Math.random() >= 0.6,
          oven: Math.random() >= 0.6,
          refrigerator: Math.random() >= 0.6,
          microwave: Math.random() >= 0.6,
          dishwasher: Math.random() >= 0.6,
          dishes: Math.random() >= 0.6,
          coffeeMaker: Math.random() >= 0.6,
          stove: Math.random() >= 0.6
        },
        guestAccess: {
          hostGreets: Math.random() >= 0.6,
          lockbox: Math.random() >= 0.6,
          privateEntrance: Math.random() >= 0.6,
          keypad: Math.random() >= 0.6
        },
        logistics: {
          longtermAllowed: Math.random() >= 0.7,
          luggageDropoff: Math.random() >= 0.6
        },
        bedAndBath: {
          hangers: Math.random() >= 0.6,
          hairDryer: Math.random() >= 0.6,
          shampoo: Math.random() >= 0.4,
          bedLinens: Math.random() >= 0.1,
          extraBedding: Math.random() >= 0.8,
          bedroomLock: true
        },
        outdoor: {
          bbqGrill: Math.random() >= 0.8,
          gardenYard: Math.random() >= 0.7,
          patioBalcony: Math.random() >= 0.5,
        },
        safetyFeatures: {
          fireExting: Math.random() >= 0.6,
          co2Alarm: Math.random() >= 0.2,
          smokeAlarm: true,
          firstAidKit: Math.random() >= 0.7,
        },
        notIncluded: {
          privateEntrance: Math.random() >= 0.8,
          washer: Math.random() >= 0.8,
          hairDryer: Math.random() >= 0.8,
          co2Alarm: Math.random() >= 0.8,
          kitchen: Math.random() >= 0.8
        }
      },
      descriptionText: lorem.generateParagraphs(3),
      sleepArrangements: {
        bedroom1: {
          exists: true,
          queenBed: 1
        },
        bedroom2: {
          exists: true,
          fullBed: 1,
        },
        bedroom3: {
          exists: Math.random() >= 0.9,
          fullBed: 1,
        },
        commonRooms: {
          exists: Math.random() >= 0.9,
          sofaBed: 1,
        }
      }
    };
    sampleListings.push(storage);
  }
};

const insertSampleListings = function() {
  createMockListings();
  Listing.create(sampleListings)
    .then(() => db.close())
    .catch( (err) => new Error(err));
};

insertSampleListings();
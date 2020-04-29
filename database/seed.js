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

const randomCity = ['Los Angeles', 'Long Beach', 'Brooklyn', 'Cave Creek', 'Napa', 'Boston', 'Naples']; // add 5 or 6 options here

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
  for (var i = 6; i < 120; i++) {
    storage = {
    // listing model goes here
      listingId: 1000 + i,
      hostId: i,
      price: generateRandomInteger(50, 299),
      headline: lorem.generateWords(5),
      stars: generateRandomRating(),
      reviews: Math.round(Math.random() * 1000),
      superHost: Math.random() >= 0.8,
      location: {
        neighborhood: null,
        city: randomCity[Math.round(Math.random() * 6)],
        State: 'California'
        // storage.location.city === 'Los Angeles' ? 'California' :
        //   storage.location.city === 'Long Beach' ? 'California' :
        //     storage.location.city === 'Brooklyn' ? 'New York' :
        //       storage.location.city === 'Cave Creek' ? 'Arizona' :
        //         storage.location.city === 'Napa' ? 'California' :
        //           storage.location.city === 'Boston' ? 'Massachusetts' :
        //             storage.location.city === 'Naples' ? 'Florida' :
        //               'not found'
      },
      subHeadline: lorem.generateWords(5),
      guestCapacity: generateRandomInteger(2, 9),
      totalBedrooms: generateRandomInteger(1, 4),
      totalBeds: generateRandomInteger(1, 4),
      totalBaths: generateRandomInteger(1, 4),
      topFeatures: {
        entireHome: Math.random() >= 0.6,
        selfCheckIn: Math.random() >= 0.6,
        sparklingClean: Math.random() >= 0.3,
        freeCancel: Math.random() >= 0.3,
        experiencedHost: false,
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
          wifi: storage.keyAmenities.wifi,
          cableTv: storage.keyAmenities.cableTv,
          fireplace: storage.keyAmenities.fireplace,
          washer: storage.keyAmenities.washer,
          dryer: storage.keyAmenities.dryer,
          iron: storage.keyAmenities.iron,
          laptopFriendlyWorkspace: storage.keyAmenities.laptopFriendlyWorkspace,
          tv: storage.keyAmenities.tv,
          essentials: storage.keyAmenities.essentials,
          heating: storage.keyAmenities.heating,
          ethernet: Math.random() >= 0.6,
          airCon: storage.keyAmenities.airCon,
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
          roomDark: Math.random() >= 0.6,
        },
        facilities: {
          freeStreetPark: Math.random() >= 0.6,
          freeParkOnPrem: storage.keyAmenities.freeParkOnPrem,
          paidParkOnPrem: Math.random() >= 0.6,
          paidParkOffPrem: Math.random() >= 0.6,
          pool: storage.keyAmenities.pool,
          gym: storage.keyAmenities.gym,
          hotTub: storage.keyAmenities.hotTub,
          singleLevel: Math.random() >= 0.8,
        },
        dining: {
          kitchen: storage.keyAmenities.kitchen,
          cookingBasics: storage.keyAmenities.kitchen,
          oven: storage.keyAmenities.kitchen,
          refrigerator: storage.keyAmenities.kitchen,
          microwave: storage.keyAmenities.kitchen,
          dishwasher: storage.keyAmenities.kitchen,
          dishes: storage.keyAmenities.kitchen,
          coffeeMaker: storage.keyAmenities.kitchen,
          stove: storage.keyAmenities.kitchen
        },
        guestAccess: {
          hostGreets: Math.random() >= 0.6,
          lockbox: !storage.allAmenities.guestAccess.hostGreets,
          privateEntrance: Math.random() >= 0.6,
          keypad: Math.random() >= 0.6
        },
        logistics: {
          longtermAllowed: Math.random() >= 0.7,
          luggageDropoff: Math.random() >= 0.6
        },
        bedAndBath: {
          hangers: storage.keyAmenities.hangers,
          hairDryer: storage.keyAmenities.hairDryer,
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
          co2Alarm: storage.keyAmenities.co2Alarm,
          smokeAlarm: true,
          firstAidKit: Math.random() >= 0.7,
        },
        notIncluded: {
          privateEntrance: !storage.allAmenities.guestAccess.privateEntrance,
          washer: !storage.keyAmenities.washer,
          hairDryer: !storage.keyAmenities.hairDryer,
          co2Alarm: !storage.keyAmenities.co2Alarm,
          kitchen: !storage.keyAmenities.kitchen
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
          fullBed: storage.sleepArrangements.bedroom3.exists ? 1 : 0,
        },
        commonRooms: {
          exists: Math.random() >= 0.9,
          sofaBed: storage.sleepArrangements.commonRooms.exists ? 1 : 0,
        }
      }
    };
    sampleListings.push(storage);
  }
};

const insertSampleListings = function() {
  createMockListings();
  Listing.create(sampleListings)
    .then(() => db.close());
};

insertSampleListings();
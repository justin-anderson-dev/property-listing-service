const mongoose = require('mongoose');
// const db = require('./index.js');

const listingSchema = new mongoose.Schema({
  //TODO: define listing schema
  listingId: { type: Number, required: true, unique: true },
  hostId: { type: Number, required: true},
  price: { type: Number, required: true},
  typeOfRoom: String,
  headline: { type: String, unique: true },
  stars: { type: Number },
  reviews: Number,
  superHost: Boolean,
  location: { type: String, required: true },
  subHeadline: String,
  guestCapacity: Number,
  totalBedrooms: Number,
  totalBeds: Number,
  totalBaths: Number,
  topFeatures: {
    entireHome: { type: Boolean, default: false },
    selfCheckIn: { type: Boolean, default: false },
    sparklingClean: { type: Boolean, default: false },
    freeCancel: { type: Boolean, default: false },
    superHost: { type: Boolean, default: false},
    experiencedHost: { type: Boolean, default: false },
    greatLocation: { type: Boolean, default: false }
  },
  keyAmenities: {
    kitchen: { type: Boolean, default: false },
    wifi: { type: Boolean, default: false },
    cableTv: { type: Boolean, default: false },
    fireplace: { type: Boolean, default: false },
    washer: { type: Boolean, default: false },
    dryer: { type: Boolean, default: false },
    iron: { type: Boolean, default: false },
    laptopFriendlyWorkspace: { type: Boolean, default: false },
    tv: { type: Boolean, default: false },
    hangers: { type: Boolean, default: false },
    hairDryer: { type: Boolean, default: false },
    essentials: { type: Boolean, default: false },
    freeParkOnPrem: { type: Boolean, default: false },
    heating: { type: Boolean, default: false },
    airCon: { type: Boolean, default: false },
    co2Alarm: { type: Boolean, default: false },
    gym: { type: Boolean, default: false },
    hotTub: { type: Boolean, default: false },
    pool: { type: Boolean, default: false }
  },
  allAmenities: {
    basic: {
      wifi: { type: Boolean, default: false },
      cableTv: { type: Boolean, default: false },
      fireplace: { type: Boolean, default: false },
      washer: { type: Boolean, default: false },
      dryer: { type: Boolean, default: false },
      iron: { type: Boolean, default: false },
      laptopFriendlyWorkspace: { type: Boolean, default: false },
      tv: { type: Boolean, default: false },
      essentials: { type: Boolean, default: false },
      heating: { type: Boolean, default: false },
      ethernet: { type: Boolean, default: false },
      airCon: { type: Boolean, default: false },
      hotWater: { type: Boolean, default: false }
    },
    familyFeatures: {
      outletCovers: { type: Boolean, default: false },
      bathtub: { type: Boolean, default: false },
      childDishes: { type: Boolean, default: false },
      packAndPlay: { type: Boolean, default: false },
      highChair: { type: Boolean, default: false },
      crib: { type: Boolean, default: false },
      booksAndToys: { type: Boolean, default: false },
      roomDark: { type: Boolean, default: false }
    },
    facilities: {
      freeStreetPark: { type: Boolean, default: false },
      freeParkOnPrem: { type: Boolean, default: false },
      paidParkOnPrem: { type: Boolean, default: false },
      paidParkOffPrem: { type: Boolean, default: false },
      pool: { type: Boolean, default: false },
      gym: { type: Boolean, default: false },
      hotTub: { type: Boolean, default: false },
      singleLevel: { type: Boolean, default: false }
    },
    dining: {
      kitchen: { type: Boolean, default: false },
      cookingBasics: { type: Boolean, default: false },
      oven: { type: Boolean, default: false },
      refrigerator: { type: Boolean, default: false },
      microwave: { type: Boolean, default: false },
      dishwasher: { type: Boolean, default: false },
      dishes: { type: Boolean, default: false },
      coffeeMaker: { type: Boolean, default: false },
      stove: { type: Boolean, default: false }
    },
    guestAccess: {
      hostGreets: { type: Boolean, default: false },
      lockbox: { type: Boolean, default: false },
      privateEntrance: { type: Boolean, default: false },
      keypad: { type: Boolean, default: false }
    },
    logistics: {
      longtermAllowed: { type: Boolean, default: false },
      luggageDropoff: { type: Boolean, default: false }
    },
    bedAndBath: {
      hangers: { type: Boolean, default: false },
      hairDryer: { type: Boolean, default: false },
      shampoo: { type: Boolean, default: false },
      bedLinens: { type: Boolean, default: false },
      extraBedding: { type: Boolean, default: false },
      bedroomLock: { type: Boolean, default: false }
    },
    outdoor: {
      bbqGrill: { type: Boolean, default: false },
      gardenYard: { type: Boolean, default: false },
      patioBalcony: { type: Boolean, default: false }
    },
    safetyFeatures: {
      fireExting: { type: Boolean, default: false },
      co2Alarm: { type: Boolean, default: false },
      smokeAlarm: { type: Boolean, default: false },
      firstAidKit: { type: Boolean, default: false }
    },
    notIncluded: {
      privateEntrance: { type: Boolean, default: false },
      washer: { type: Boolean, default: false },
      hairDryer: { type: Boolean, default: false },
      co2Alarm: { type: Boolean, default: false },
      kitchen: { type: Boolean, default: false }
    }
  },
  descriptionText: String,
  sleepArrangements: {
    bedroom1: {
      exists: {type: Boolean, default: false},
      kingBed: {type: Number, default: 0},
      queenBed: {type: Number, default: 0},
      fullBed: {type: Number, default: 0},
      twinBed: {type: Number, default: 0},
      sofaBed: {type: Number, default: 0},
      crib: {type: Number, default: 0},
      childBed: {type: Number, default: 0}
    },
    bedroom2: {
      exists: {type: Boolean, default: false},
      kingBed: {type: Number, default: 0},
      queenBed: {type: Number, default: 0},
      fullBed: {type: Number, default: 0},
      twinBed: {type: Number, default: 0},
      sofaBed: {type: Number, default: 0},
      crib: {type: Number, default: 0},
      childBed: {type: Number, default: 0}
    },
    bedroom3: {
      exists: {type: Boolean, default: false},
      kingBed: {type: Number, default: 0},
      queenBed: {type: Number, default: 0},
      fullBed: {type: Number, default: 0},
      twinBed: {type: Number, default: 0},
      sofaBed: {type: Number, default: 0},
      crib: {type: Number, default: 0},
      childBed: {type: Number, default: 0}
    },
    bedroom4: {
      exists: {type: Boolean, default: false},
      kingBed: {type: Number, default: 0},
      queenBed: {type: Number, default: 0},
      fullBed: {type: Number, default: 0},
      twinBed: {type: Number, default: 0},
      sofaBed: {type: Number, default: 0},
      crib: {type: Number, default: 0},
      childBed: {type: Number, default: 0}
    },
    commonRooms: {
      exists: {type: Boolean, default: false},
      sofaBed: {type: Number, default: 0},
      crib: {type: Number, default: 0},
      childBed: {type: Number, default: 0}
    },
  }
},
{
  timestamps: true
}
);

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;

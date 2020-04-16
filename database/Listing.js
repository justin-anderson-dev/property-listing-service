const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const listingSchema = new mongoose.Schema({
  //TODO: define listing schema
  hostId: Number,
  headline: String,
  location: {
    neighborhood: String,
    city: String,
    State: String
  },
  guestCapacity: Number,
  totalBedrooms: Number,
  totalBeds: Number,
  totalBaths: Number,
  coreAmenities: [{
    amenityTitle: {type: String, required: true},
    amenityDescr: {type: String, required: false},
    iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
  }],
  allAmenities: {
    basic: [{
      amenityTitle: {type: String, required: true},
      amenityDescr: {type: String, required: false},
      iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
    }],
    familyFeatures: [{
      amenityTitle: {type: String, required: true},
      amenityDescr: {type: String, required: false},
      iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
    }],
    facilities: [{
      amenityTitle: {type: String, required: true},
      amenityDescr: {type: String, required: false},
      iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
    }],
    dining: [{
      amenityTitle: {type: String, required: true},
      amenityDescr: {type: String, required: false},
      iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
    }],
    guestAccess: [{
      amenityTitle: {type: String, required: true},
      amenityDescr: {type: String, required: false},
      iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
    }],
    logistics: [{
      amenityTitle: {type: String, required: true},
      amenityDescr: {type: String, required: false},
      iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
    }],
    bedAndBath: [{
      amenityTitle: {type: String, required: true},
      amenityDescr: {type: String, required: false},
      iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
    }],
    safetyFeatures: [{
      amenityTitle: {type: String, required: true},
      amenityDescr: {type: String, required: false},
      iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
    }],
    notIncluded: [{
      amenityTitle: {type: String, required: true},
      amenityDescr: {type: String, required: false},
      iconUrl: {type: String, default: 'https://visualpharm.com/assets/757/Briefcase-595b40b85ba036ed117daf4c.svg'}
    }]
  },
  descriptionText: String,
  sleepArrangements: [{
    roomName: {type: String, default: 'Bedroom 1'},
    bedInfo: [{type: String, default: '1 queen bed'}]
  }]
},
{
  timestamps: true
}
);

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;

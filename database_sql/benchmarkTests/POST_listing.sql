INSERT INTO listings (
  listing_id,
  host_id,
  headline,
  price,
  type_of_room,
  stars,
  reviews,
  superhost,
  sleep_arrangements,
  location,
  total_beds,
  guest_capacity,
  total_bedrooms,
  total_baths,
  description_text,
  top_features,
  key_amenities,
  all_amenities
)
VALUES (
  9456789,
  9456789,
  'Gather round, young ones, and hear my story.',
  193,
  'Entire home',
  3.8,
  543,
  true,
  '{
    "bedroom1": {
      "exists": true,
      "queenBed": 1
    },
    "bedroom2": {
      "exists": true,
      "fullBed": 1
    },
    "bedroom3": {
      "exists": false,
      "fullBed": 1
    },
    "commonRooms": {
      "exists": false,
      "sofaBed": 1
    }
  }',
  'Long Beach, California',
  4,
  6,
  2,
  3,
  'Excepteur ex ullamco amet. Excepteur anim non magna qui laborum. Et sit quis magna et esse commodo anim aliqua magna irure minim.\nExcepteur labore consequat dolor nisi culpa deserunt adipisicing. Deserunt reprehenderit elit incididunt mollit nostrud esse. Velit esse occaecat est in sunt velit non laboris mollit dolor. Et quis do voluptate incididunt deserunt excepteur dolor ullamco nisi proident officia. Voluptate ut sunt eu velit mollit qui. Minim ut aliquip laboris dolore dolor voluptate duis laborum nostrud adipisicing labore. Incididunt dolor enim velit ea exercitation in. Voluptate excepteur cillum magna nostrud commodo elit consectetur nostrud.\nMinim in irure ex dolor in voluptate commodo pariatur non. Deserunt Lorem velit laborum dolore officia culpa ea id. Dolore nulla minim laboris culpa.',
  '{
    "entireHome": true,
    "selfCheckIn": false,
    "sparklingClean": false,
    "freeCancel": false,
    "greatLocation": true
  }',
  '{
    "kitchen": false,
    "wifi": true,
    "cableTv": false,
    "fireplace": true,
    "washer": true,
    "dryer": false,
    "iron": true,
    "laptopFriendlyWorkspace": true,
    "tv": true,
    "hangers": true,
    "hairDryer": true,
    "essentials": false,
    "freeParkOnPrem": false,
    "heating": true,
    "airCon": true,
    "co2Alarm": false,
    "gym": false,
    "hotTub": false,
    "pool": false
  }',
  '{
    "basic": {
      "wifi": false,
      "cableTv": true,
      "fireplace": false,
      "washer": false,
      "dryer": false,
      "iron": false,
      "laptopFriendlyWorkspace": false,
      "tv": true,
      "essentials": false,
      "heating": true,
      "ethernet": true,
      "airCon": false,
      "hotWater": true
    },
    "familyFeatures": {
      "outletCovers": true,
      "bathtub": true,
      "childDishes": true,
      "packAndPlay": false,
      "highChair": false,
      "crib": false,
      "booksAndToys": true,
      "roomDark": true
    },
    "facilities": {
      "freeStreetPark": true,
      "freeParkOnPrem": true,
      "paidParkOnPrem": true,
      "paidParkOffPrem": false,
      "pool": true,
      "gym": true,
      "hotTub": true,
      "singleLevel": false
    },
    "dining": {
      "kitchen": false,
      "cookingBasics": false,
      "oven": false,
      "refrigerator": false,
      "microwave": true,
      "dishwasher": true,
      "dishes": false,
      "coffeeMaker": false,
      "stove": true
    },
    "guestAccess": {
      "hostGreets": false,
      "lockbox": false,
      "privateEntrance": false,
      "keypad": false
    },
    "logistics": {
      "longtermAllowed": true,
      "luggageDropoff": false
    },
    "bedAndBath": {
      "hangers": true,
      "hairDryer": false,
      "shampoo": false,
      "bedLinens": true,
      "extraBedding": false,
      "bedroomLock": true
    },
    "outdoor": {
      "bbqGrill": false,
      "gardenYard": false,
      "patioBalcony": true
    },
    "safetyFeatures": {
      "fireExting": false,
      "co2Alarm": true,
      "smokeAlarm": true,
      "firstAidKit": false
    },
    "notIncluded": {
      "privateEntrance": false,
      "washer": false,
      "hairDryer": false,
      "co2Alarm": false,
      "kitchen": false
    }
  }'
)
RETURNING *;
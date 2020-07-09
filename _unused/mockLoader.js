const AWS = require('aws-sdk');
const fs = require('fs');

// Create document client interface for DynamoDB
const  documentClient = new AWS.DynamoDB.DocumentClient({
  endpoint: 'http://localhost:8000',
  apiVersion: '2012-08-10',
  region: 'us-west-1'
});

// TODO: refactor expressions below to iterate through entire directory and load all json files
const listingData = JSON.parse(fs.readFileSync('database_nosql/sample_data/data-1-10.json', 'utf8'));

listingData.forEach(function(listing) {
  var params = {
    TableName: "listings",
    Item: {
      "listing_id": listing.listing_id,
      "host_id": listing.host_id,
      "headline": listing.headline,
      "price": listing.price,
      "type_of_room": listing.type_of_room,
      "stars": listing.stars,
      "reviews": listing.reviews,
      "superhost": listing.superhost,
      "sleep_arrangements": listing.sleep_arrangements,
      "location": listing.location,
      "total_beds": listing.total_beds,
      "guest_capacity": listing.guest_capacity,
      "total_bedrooms": listing.total_bedrooms,
      "total_baths": listing.total_baths,
      "description_text": listing.description_text,
      "top_features": listing.top_features,
      "key_amenities": listing.key_amenities,
      "all_amenities": listing.all_amenities
    }
  };

  // TODO: refactor to batch-write and log result after batch rather than item
  documentClient.put(params, function(err, data) {
    if (err) {
      console.error("Couldn't add listing because: ", err);
    } else {
      console.log("Added listing number: ", listing.listing_id);
    }
  });
});
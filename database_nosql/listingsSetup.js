const AWS = require('aws-sdk');

// NOTE: Change endpoint value below for deployment
const dynamodb = new AWS.DynamoDB({
  endpoint: 'http://localhost:8000',
  apiVersion: '2012-08-10',
  region: 'us-west-1'
});

// console.log('DynamoDB config properties: ', JSON.stringify(dynamodb.config, null, 2));

var params = {
  AttributeDefinitions: [
    {
      AttributeName: "listing_id",
      AttributeType: "N"
    },
    {
      AttributeName: "headline",
      AttributeType: "S"
    }
  ],
  KeySchema: [
    {
      AttributeName: "listing_id",
      KeyType: "HASH"
    }
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: "headline_index",
      KeySchema: [
        {
        AttributeName: "headline",
        KeyType: "HASH"
        }
      ],
      Projection: {
        ProjectionType: "ALL"
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
      }
    }
  ],
  BillingMode: 'PROVISIONED',
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5
  },
  TableName: "listings"
};

dynamodb.createTable(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Listings table created: ", JSON.stringify(data, null, 2));
  }
});

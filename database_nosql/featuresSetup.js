const AWS = require('aws-sdk');

// NOTE: Change endpoint value below for deployment
const dynamodb = new AWS.DynamoDB({
  endpoint: 'http://localhost:8000',
  apiVersion: '2012-08-10',
  region: 'us-west-1'
});

console.log('DynamoDB config properties: ', JSON.stringify(dynamodb.config, null, 2));

var params = {
  AttributeDefinitions: [
    {
      AttributeName: "id_string",
      AttributeType: "S"
    }
  ],
  KeySchema: [
    {
      AttributeName: "id_string",
      KeyType: "HASH"
    }
  ],
  BillingMode: 'PROVISIONED',
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5
  },
  TableName: "features"
};

dynamodb.createTable(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Features table created: ", JSON.stringify(data, null, 2));
  }
});

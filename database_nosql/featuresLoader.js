const featureData = require('./feature-data.js');
const AWS = require('aws-sdk');

// Create document client interface for DynamoDB
const documentClient = new AWS.DynamoDB.DocumentClient({
  endpoint: 'http://localhost:8000',
  apiVersion: '2012-08-10',
  region: 'us-west-1'
});


// make a copy of featureData array
const featureDataCopy = featureData.slice();

// function that reads from featureData array and batchWrites 25 items at a time to features table
const loadFeatures = function(array) {
  const batch = [];

  // pop top 25 items to batch array
  for (let i = 1; i <= 25; i++) {
    if (i > array.length) {
      break;
    }
    let putRequest = {
      PutRequest: {
        Item: array.pop()
      }
    };
    batch.push(putRequest);
  }
  const params = {
    RequestItems: {
      'features': batch
    }
  };
  // batchWrite the contents of batch to features table
  documentClient.batchWrite(params, function(err, data) {
    if (err) {
      console.error(err);
      } else {
        console.log('Added ' + batch.length + ' items to Features table');
      }
  });

  // pass remaining array back to function
  if (array.length) {
    loadFeatures(array);
  }
};

loadFeatures(featureDataCopy);
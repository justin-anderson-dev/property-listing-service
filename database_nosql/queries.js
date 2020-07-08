// defines database query functions for AWS local container
const AWS = require('aws-sdk');

// NOTE: Change endpoint value below for deployment
const ddbParams = { endpoint: 'http://localhost:8000', apiVersion: '2012-08-10', region: 'us-west-1' };

// Create Service interface and Document Client interface for DynamoDB
const dynamodb = new AWS.DynamoDB(ddbParams);
const ddbDocumentClient = new AWS.DynamoDB.DocumentClient(ddbParams);

// TODO: Refactor all functions below for aws-sdk equivalents

const getListing = function(id, callback) {
  const parsed = Number.parseInt(id, 10);
  const stringParams = {
    TableName: "listings",
    IndexName: "headline_index",
    KeyConditionExpression: "headline = :headline",
    ExpressionAttributeValues:  {":headline":{"S": `${id}`}}
  };
  const numParams = {
    TableName: "listings",
    KeyConditionExpression: "listing_id = :listing_id",
    ExpressionAttributeValues:  {":listing_id":{"N": `${id}`}}
  };
  const queryParams = Number.isNaN(parsed) ? stringParams : numParams;

  return dynamodb.query(queryParams).promise()
    .then(listing => callback(listing.Items[0]))
    .catch(err =>  console.error(err));
};

const getFeatures = function(callback) {
  const queryParams = {TableName: "features"};

  return dynamodb.scan(queryParams).promise()
    .then(features => callback(features))
    .catch(err => console.error(err));
};

const addListing = function(data, callback) {
  const queryParams = {
    TableName: 'listings',
    Item: data
  }
  // console.log(queryParams.Item);
  return ddbDocumentClient.put(queryParams).promise()
    .then(response => callback(response))
    .catch(err => console.error(err));
};

const addListingAlt = function(data, callback) {
  const queryParams = {
    RequestItems: {
      'listings': [
        {
          PutRequest: {
          Item: data
          },
        }
      ]
    }
  }
  console.log(queryParams.RequestItems['listings'][0].PutRequest.Item);
  return ddbDocumentClient.batchWrite(queryParams).promise()
  .then(response => callback(response))
  .catch(err => console.error(err));
};

// TODO: Fix update function to handle any combination of key/value pairs in the request body
const updateListing = function(id, data, callback) {
  console.log(`request body --> ${JSON.stringify(data, null, 2)}`);
  const keys = Object.keys(data);
  const values = Object.values(data);
  const queryParams = {
    TableName: 'listings',
    Key: {
      listing_id: Number.parseInt(id, 10)
    },
    UpdateExpression: 'set headline = :headline',
    // "set " + `${keys.forEach(key => key +" = :" + key + ", ")}`,
    ExpressionAttributeValues: {
      ":headline": data.headline
    },
    // `{
    //   ${keys.forEach((key, index) => {
    //     JSON.stringify(":" + key) + ": " + JSON.stringify(values[index] + ",")
    //   })}
    // }`,
    ReturnValues: "ALL_NEW"
  };
  console.log(queryParams.UpdateExpression, queryParams.ExpressionAttributeValues);

  return ddbDocumentClient.update(queryParams).promise()
    .then(response => callback(response))
    .catch(err => console.error(err));
};

const deleteListing = function(id, callback) {
  const queryParams = {
    TableName: "listings",
    Key: {
      "listing_id": Number.parseInt(id, 10)
    },
    ReturnValues: "ALL_OLD"
  };

  return ddbDocumentClient.delete(queryParams).promise()
    .then(response => callback(response))
    .catch(err => console.error(err));
}

const describeListingsTable = function(callback) {
  return dynamodb.describeTable({TableName: 'listings'}).promise()
    .then(response => callback(response))
    .catch(err => console.error(err));
}

module.exports = { getListing, getFeatures, addListing, updateListing, deleteListing, addListingAlt, describeListingsTable };

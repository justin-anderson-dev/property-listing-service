const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  endpoint: process.env.API_URL,
  port: process.env.PORT,
  mongoUri: process.env.MONGODB_URI,
  environment: process.env.NODE_ENV,
  awsKey: process.env.AWS_TOKEN
};
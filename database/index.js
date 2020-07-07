require('dotenv').config();
const mongoose = require('mongoose');
const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  socketTimeoutMS: 120000
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function() {
  console.log('Database connection successful...');
});

module.exports = db;

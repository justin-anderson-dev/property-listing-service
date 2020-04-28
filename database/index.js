const mongoose = require('mongoose');
const mongoUri = process.env.MONGODB_URI;

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

module.exports = db;

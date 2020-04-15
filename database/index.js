const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/blogmodo';

const db = mongoose.connect(mongoUri);

module.exports = db;

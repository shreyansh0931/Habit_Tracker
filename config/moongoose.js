const mongoose = require('mongoose');

async function connectToMongoDB() {
  await mongoose.connect('mongodb://127.0.0.1:27017/habbit_tracker');
  console.log('Connected to MongoDB: Habit Tracker');
}

module.exports = { connectToMongoDB };

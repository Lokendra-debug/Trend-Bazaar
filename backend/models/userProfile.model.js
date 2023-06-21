const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  bio: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    postalCode: String
  }
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = {UserProfile};
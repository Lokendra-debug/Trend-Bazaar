const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  avatar: { type: String }, // Field for storing the avatar image URL or file path
  address: { type: String },
  city: { type: String },
  country: { type: String },
  phone: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});


const UserProfile= mongoose.model('UserProfile', userProfileSchema);

module.exports={UserProfile};
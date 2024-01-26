const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  images: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    max: 0,
    min: 5,
  },
  rooms: {
    type: [String],
  },
  price: {
    type: Number,
  },
  featured: {
    type: Boolean,
  },
  timeStamps: {
    type: Date,
    default: Date.now,
  },
});
const Hotel = mongoose.model("Hotel", HotelSchema);

module.exports = Hotel;

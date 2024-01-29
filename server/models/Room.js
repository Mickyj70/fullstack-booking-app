const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  timeStamps: {
    type: Date,
    default: Date.now,
  },
});
const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;

const Hotel = require("../models/Hotel");
const Room = require("../models/Room");

exports.createRoom = async (req, res) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } });
    res.status(200).json(savedRoom);
  } catch (error) {
    res.error(500).json({
      error: error.message,
    });
  }
};

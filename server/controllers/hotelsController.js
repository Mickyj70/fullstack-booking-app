const Hotel = require("../models/Hotel");

//create hotel
exports.createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// exports.updateHotel = async (req, res) => {
//   try {
//     const hotel = await Hotel.findById(req.params.id);

//     if (!hotel) {
//       return res.status(404).json({ message: 'Hotel not found' });
//     }

//     Object.assign(hotel, req.body);
//     await hotel.save();

//     res.status(200).json(hotel);

//   } catch (error) {
//     res.status(500).json({
//       error: error.message
//     });
//   }
// }

//update hotel
exports.updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// delete hotel
exports.deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Hotel deleted successfully" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//get all hotels
exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

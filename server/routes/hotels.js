const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/hotelsController");

router.post("/", hotelController.createHotel);
router.put("/:id", hotelController.updateHotel);
router.delete("/:id", hotelController.deleteHotel);
router.get("/", hotelController.getAllHotels);

module.exports = router;

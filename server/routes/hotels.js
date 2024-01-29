const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/hotelsController");
const { verifyAdmin } = require("../middleware/verifyToken");

router.post("/", verifyAdmin, hotelController.createHotel);
router.put("/:id", verifyAdmin, hotelController.updateHotel);
router.delete("/:id", verifyAdmin, hotelController.deleteHotel);
router.get("/", hotelController.getAllHotels);

module.exports = router;

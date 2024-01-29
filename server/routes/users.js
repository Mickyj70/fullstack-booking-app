const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../middleware/verifyToken");

router.get(
  "/checkauthentication",
  verifyToken,
  userController.checkAuthentication
);
router.get("/checkuser/:id", verifyUser, userController.checkUser);
router.get("/checkAdmin/:id", verifyAdmin, userController.checkAdmin);
router.put("/:id", verifyUser, userController.updateUser);
router.delete("/:id", verifyUser, userController.deleteUser);
router.get("/:id", verifyUser, userController.getUser);
router.get("/", verifyAdmin, userController.getAllUsers);

module.exports = router;

const { verifyToken } = require("../middleware/verifyToken");
const User = require("../models/User");

//update User
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// delete User
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//get a user
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//get all Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//checking user authentication
exports.checkAuthentication = async (req, res) => {
  res.send("hello user, you are logged in");
};

//check user is logged in
exports.checkUser = async (req, res) => {
  res.send(
    "hello user, you are logged in and you can delete and update your account"
  );
};

//check if user is admin
exports.checkAdmin = async (req, res) => {
  res.send(
    "hello user, you are logged in an as admin you can delete and update any account"
  );
};

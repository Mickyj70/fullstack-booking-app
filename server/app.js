require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const PORT = process.env.PORT || 3500;

//connect DB
connectDB();

// Cross Origin Resource Sharing
app.use(cors());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/hotel", require("./routes/hotels"));
// app.use("/api/room", require("./routes/rooms"));
app.use("/api/user", require("./routes/users"));

mongoose.connection.once("open", () => {
  console.log("DB connected");

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

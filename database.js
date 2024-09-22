const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to Databse");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

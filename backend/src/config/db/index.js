require('dotenv').config()
const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL


async function connect() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connect Successfully!!");
  } catch (error) {
    console.log("Connect Fail!!");
  }
}

module.exports = { connect };

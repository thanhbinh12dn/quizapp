require('dotenv').config()
const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL


async function connect() {
  try {
    // await mongoose.connect("mongodb+srv://quizapp_admin:WviT5ABBtqBYALuM@quizapp.kojtchm.mongodb.net/quizapp?retryWrites=true&w=majority");
    await mongoose.connect(MONGODB_URL);
    console.log("Connect Successfully!!");
  } catch (error) {
    console.log("Connect Fail!!");
  }
}

module.exports = { connect };

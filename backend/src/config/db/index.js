const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://be-quizapp:SbQvqUdaZjSuHCCM@be-quizapp.icpu7lx.mongodb.net/?authSource=be-quizapp&authMechanism=SCRAM-SHA-1"
    );
    console.log("Connect Successfully!!");
  } catch (error) {
    console.log("Connect Fail!!");
  }
}

module.exports = { connect };

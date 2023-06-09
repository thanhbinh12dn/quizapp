const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://quizapp:M71RKS0fUzS0JB8b@quizapp.xt5jcj1.mongodb.net/?authSource=quizapp&authMechanism=SCRAM-SHA-1"
    );
    console.log("Connect Successfully!!");
  } catch (error) {
    console.log("Connect Fail!!");
  }
}

module.exports = { connect };

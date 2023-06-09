const Question = require("../models/Question");

class QuestionController {
  //[GET] /question/
  index(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    Question.find({})
      .then((question) => {
        res.json(question);
      })
      .catch(next);
  }
}

module.exports = new QuestionController();

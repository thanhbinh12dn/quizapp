const questionRouter = require("./question");

function route(app) {
  app.use("/question", questionRouter);
}

module.exports = route;

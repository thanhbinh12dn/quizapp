const express = require("express");
// require('dotenv').config()
const app = express();
const port = 3001;

const route = require("./routes");

const db = require("./config/db");

db.connect();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

route(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

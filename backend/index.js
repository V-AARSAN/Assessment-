const express = require('express');
const UserRoute = require('./Router/UserRoute');
const cors = require('cors')
const parser = require("body-parser")
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors({ origin: "http://localhost:5000" }));

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use("/route", UserRoute);

app.listen(port, () => {
  console.log(`Your port ${port} is running successfully`);
});


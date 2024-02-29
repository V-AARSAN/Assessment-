const express = require('express');
const UserContoller = require('../Controller/UserContoller');
const App = express();

App.use("/UserContoller", UserContoller)

module.exports = App ;
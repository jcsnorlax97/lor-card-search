const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const app = express();

// use fs to read and write the json files.
const fs = require("fs");

// for receiving and parsing URL encoded data from clients, i.e. parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// for receiving and parsing JSON data, i.e. parse application/json
app.use(bodyParser.json());

app.use(pino);

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);

// to handle all routes
const routes = require("./routes/routes.js")(app, fs);

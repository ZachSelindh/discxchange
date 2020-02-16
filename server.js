const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.ENVIRONMENT === "development") {
  // Dev route
  app.use(express.static(path.join(__dirname, "client/public")));
} else if (process.env.ENVIRONMENT === "production") {
  // Build route
  app.use(express.static(path.join(__dirname, "client", "build")));
}

const routes = require("./routes");
app.use(routes);

const connection = require("./config/connection");

const seedDisc = require("./config/seedFunction");

connection
  .then(() => console.log("Database connected"))
  .then(
    [
      {
        title: "Ranger",
        year: 2018,
        season: "Fall",
        description: "A Ranger disc from 2018",
        price: 100
      },
      {
        title: "Alpaca",
        year: 2007,
        season: "Autumn",
        description: "A little hairy",
        price: 105
      }
    ].forEach(disc => seedDisc(disc))
  )
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3001;

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

const path = require("path");
const router = require("express").Router();

require("dotenv").config();

const apiRoutes = require("./api/index");

router.use("/api/", apiRoutes);

// Send React start point if no routes are called.
router.use(function(req, res) {
  if (process.env.ENVIRONMENT === "development") {
    // Dev route
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  } else if (process.env.ENVIRONMENT === "production") {
    // Build route
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  }
});

module.exports = router;

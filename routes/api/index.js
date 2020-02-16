const express = require("express");
const router = express.Router();

// API tets route
router.get("/test", (req, res) => {
  res.send({ msg: "API Hit" });
});

module.exports = router;

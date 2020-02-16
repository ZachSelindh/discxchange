const express = require("express");
const router = express.Router();
const discController = require("../../controllers/disc/index");

// API test route
router.route("/test").get(discController.test);

router.route("/newdisc").put(discController.newDisc);

router.route("/disc/:discID").get(discController.getDisc);

module.exports = router;

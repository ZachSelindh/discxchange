const express = require("express");
const router = express.Router();
const discController = require("../../controllers/disc/index");

// API test route
router.route("/test").get(discController.test);

router.route("/disc/:discID").get(discController.getDisc);

router.route("/alldisc").get(discController.getAllDisc);

router.route("/newdisc").put(discController.newDisc);

module.exports = router;

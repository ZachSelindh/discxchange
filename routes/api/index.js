const express = require("express");
const router = express.Router();
const discController = require("../../controllers/disc/index");
const userController = require("../../controllers/user/index");

// API test route
router.route("/test").get(discController.test);

router.route("/testuser").get(userController.test);

router.route("/createuser").post(userController.createUser);

router.route("/disc/:discID").get(discController.getDisc);

router.route("/alldisc").get(discController.getAllDisc);

router.route("/newdisc").post(discController.newDisc);

module.exports = router;

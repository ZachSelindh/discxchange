const User = require("../../models/disc");

const userController = {
  test: (req, res) => {
    res.send({ msg: "User API hit via controller" });
  },
  getUser: (req, res) => {
    User.find({ _id: req.params.userID })
      .then(foundUser => res.json(foundUser))
      .catch(err => res.status(422).json(err));
  }
};

module.exports = userController;

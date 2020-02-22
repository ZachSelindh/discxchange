const User = require("../../models/user/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userController = {
  test: (req, res) => {
    res.send({ msg: "User API hit via controller" });
  },
  createUser: (req, res) => {
    const { username, password, photoURL, location, email } = req.body;
    // BCrypt password hashing

    bcrypt.hash(password, 10, function(err, hash) {
      if (err) {
        throw err;
      }
      // Create User at DB
      User.create({ username, password: hash, photoURL, location, email })
        .then(newUser => res.json({ newUser, message: "User created!" }))
        .catch(err => res.status(420).json(err));
    });
  },
  getUser: (req, res) => {
    User.find({ _id: req.params.userID })
      .then(foundUser => res.json(foundUser))
      .catch(err => res.status(422).json(err));
  }
};

module.exports = userController;

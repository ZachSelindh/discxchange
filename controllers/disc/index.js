const Disc = require("../../models/disc");

const discController = {
  test: (req, res) => {
    res.send({ msg: "API hit via controller" });
  },
  getDisc: (req, res) => {
    Disc.find({ _id: req.params.discID })
      .then(foundDisc => res.json(foundDisc))
      .catch(err => res.status(422).json(err));
  },
  getAllDisc: (req, res) => {
    Disc.find({})
      .then(discs => res.send(discs))
      .catch(err => res.status(422).json(err));
  },
  newDisc: (req, res) => {
    Disc.create(req.body)
      .then(newDisc => res.json(newDisc))
      .catch(err => res.status(422).json(err));
  }
};

module.exports = discController;

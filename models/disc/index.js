const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discSchema = new Schema({
  title: { type: String, required: true },
  year: { type: Number, require: true },
  season: { type: String, required: false },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Disc = mongoose.model("Disc", discSchema);

module.exports = Disc;

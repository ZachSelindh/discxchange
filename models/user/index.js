const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  photoURL: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true },
  discs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Disc" }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;

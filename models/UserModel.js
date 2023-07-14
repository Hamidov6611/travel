const { Schema, model } = require("mongoose");

const UserModel = new Schema({
  name: { type: String, require: true, min: 3 },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

module.exports = model("User", UserModel);

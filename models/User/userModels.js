const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const schemaUser = new Schema({
  nombre : { type: String, trim: true, require: true },
  correo : { type: String, trim: true, require: true },
  estado: {type: String, trim: true, required: true},
  rol: {type: String, trim: true, required: true},
  }, {
    timestamps: true
});

const User = model("User", schemaUser);
module.exports = User;
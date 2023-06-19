const { Schema, model } = require("mongoose");

const herroSchema = new Schema({
  nickname: {
    type: String,
    require: true,
  },
  real_name: {
    type: String,
    require: true,
  },
  superpowers: {
    type: String,
    require: true,
  },
  catch_phrase: {
    type: String,
    require: true,
  },
  Images: {
    type: [String],
  },
});

const Hero = model("heroes", herroSchema);

module.exports = Hero;

const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  image: String,
  category: String,
});

module.exports = mongoose.model("Project", projectSchema);
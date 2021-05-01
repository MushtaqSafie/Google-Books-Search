const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  authors: {
    type: String,
    default: "",
    unique: true
  },

});

const Recipe = mongoose.model("Book", recipeSchema);

module.exports = Book;

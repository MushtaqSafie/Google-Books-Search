const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  link: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  authors: Array,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

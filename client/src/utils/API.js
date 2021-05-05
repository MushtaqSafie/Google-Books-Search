import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Post a save book
  addSaveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Delete a save book
  deleteSaveBook: function(id) {
    return axios.delete("/api/books/"+ id);
  },
  // search for books via Google API
  getSearch: function(keyword) {
    return axios.get("/api/search/" + keyword)
  }

};

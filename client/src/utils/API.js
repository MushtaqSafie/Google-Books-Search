import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // search for books via Google API
  getSearch: function(keyword) {
    return axios.get("/api/search/" + keyword)
  }

};

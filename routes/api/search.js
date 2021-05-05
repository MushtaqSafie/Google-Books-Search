const router = require("express").Router();
const axios = require('axios');

const resultData = [];
//   {
//     authors: [],
//     description: "",
//     image: "",
//     link: "",
//     title: ""
//   }  

const APIkey = "";

// Matches with "/api/search/:id"
router
  .route("/:id")
  .get((req, res) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.id}+intitle:${req.params.id}&maxResults=10&key=${APIkey}`).then(result => {
      result.data.items.forEach(book => {
        let results = { title: book.volumeInfo.title };
        if (book.volumeInfo.authors) {
          results.authors = book.volumeInfo.authors
        } else { results.authors = [] }

        if (book.volumeInfo.imageLinks.thumbnail) {
          results.image = book.volumeInfo.imageLinks.thumbnail;
        } else { results.image = "" }

        if (book.volumeInfo.previewLink) {
          results.link = book.volumeInfo.previewLink
        } else { results.link = "" }

        if (book.volumeInfo.description) {
          results.description = book.volumeInfo.description
        } else { results.description = "No description available for this book" }
        resultData.push(results)
      });
      res.json(resultData)
    })
    .catch(err => console.log(err));
  });



module.exports = router;

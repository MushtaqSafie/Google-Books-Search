const router = require("express").Router();
const booksRoutes = require("./books");

// Post routes
router.use("/books", booksRoutes);

module.exports = router;

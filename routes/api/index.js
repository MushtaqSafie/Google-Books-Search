const router = require("express").Router();
const booksRoutes = require("./books");

// books routes
router.use("/books", booksRoutes);

module.exports = router;

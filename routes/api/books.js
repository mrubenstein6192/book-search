const router = require("express").Router();
const booksController = require("../../controllers/bookController");

// This is anything that matches our "/api/books" with our controller/database
router.route("/")
    .post(booksController.createBook);


// this is if it matches with "/api/books/:id" which would be for a delete
router
    .route("/:id")
    .get(booksController.findById)
    .delete(booksController.deleteBook);

module.exports = router;
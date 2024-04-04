const express = require("express");
const {
  getSingleBookById,
  getAllBooks,
  getAllIssuedBooks,
  addNewBook,
  updateBookById,
} = require("../controllers/book-controller");
// Data import
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");
// const { route } = require("./users");

//const BookModel = require('../models/book-model');
//const UserModel = require('../models/user-model');

// Local Router
const router = express.Router();

const { UserModel, BookModel } = require("../models/index");

/**
 * Route: /books/:id
 * Method: GET
 * Decsription: Get Book By Its Id
 * Access: Public
 * Paramaters: ID
 */
router.get("/:id", getSingleBookById);
// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const book = books.find((each) => each.id === id);

// if(!book) {
//   return res.status(404).json({
//     success: false,
//     message: "Book Not Found",
//   });
//  }
//   return res.status(200).json({
//     success: true,
//     message: "Found The Book By Their Id",
//     data: book,
//   });
// });

/**
 * Route: /books
 * Method: GET
 * Decsription: Geting All Books
 * Access: Public
 * Paramaters: None
 */
router.get("/", getAllBooks);
// router.get("/", (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, message: " Getting all books", data: books });
// });

/**
 * Route: /books/issued/by-user
 * Method: GET
 * Decsription: Get all issued books
 * Access: Public
 * Paramaters: None
 */
router.get("/issued/by-user", (req, res) => {
  const usersWithIssuedBooks = users.filter((each) => {
    if (each.issuedBook) return each;
  });

  const issuedBooks = [];

  usersWithIssuedBooks.forEach((each) => {
    const book = books.find((book) => book.id === each.issuedBook);

    book.issuedBy = each.name;
    book.issuedDate = each.issuedDate;
    book.returnDate = each.returnDate;

    issuedBooks.push(book);
  });
  if (issuedBooks.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No books issued yet." });
  }
  return res.status(200).json({
    success: true,
    data: issuedBooks,
  });
});

/**
 * Route: /books
 * Method: POST
 * Decsription: Create/Add a new Book
 * Access: Public
 * Paramaters: None
 * Data: Author, Name, Genre, Price, Publisher, Id
 */
router.post("/", addNewBook);

/**
 * Route: /books/:id
 * Method: PUT
 * Decsription: Update a Book By Its ID
 * Access: Public
 * Paramaters: Id
 */
router.put("/:id", updateBookById);

// Default Export
module.exports = router;

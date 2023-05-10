const express = require("express");
const router = express.Router();

// Sequelize
const { QueryTypes } = require("sequelize");
const db = require("../db/db");

// Database Models
const User = require("../db/models/User");
const Books = require("../db/models/Books");
const Bookshelf = require("../db/models/Bookshelf");

// Database Relations
Books.hasMany(Bookshelf, { onDelete: 'cascade' });
Bookshelf.belongsTo(Books);
User.hasMany(Bookshelf, { onDelete: 'cascade'});
Bookshelf.belongsTo(User);





//check if user is authenticated using isauthenticated middleware             
//pass in user id from isAuthenticated middleware               ????? Ask CC about this
//for book id, pass in from body



// TO DO: Limit to get all books from a specific user
// Gets all bookshelf entries
router.get("/", async (req, res) => {
  try {
    let ok = await db.sequelize.query(
      // "SELECT bookshelves.id, books.title, books.author, books.img_url FROM books JOIN bookshelves ON books.id = bookshelves.\"bookId\"", {
      "SELECT bs.id, b.title, b.author, b.img_url FROM books b JOIN bookshelves bs ON b.id = bs.\"bookId\" WHERE bs.\"userId\" = 1", {
        type: QueryTypes.SELECT
       }
    );
    res.json(ok);
  } catch (err) {
    console.error(err.message);
  }
});



// TO DO figure our how to pass in user id. Ask CC
// Adds a book to user's bookshelf
router.post("/", async (req, res) => {
  const body = req.body;
  let title = req.body.entry;
  let userId = req.body.userId;
  let pages = req.body.pages;

  // Check if the book the user entered is in the database
  try {
    await db.sequelize.query(
      "SELECT id FROM books WHERE LOWER(title) = LOWER(:title)", {
        replacements: { title: title },
        type: QueryTypes.SELECT
      })
    .then(async function (book) {
      if (book.length !== 0) {
        // If the book exists, create the bookshelf entry and store in database.
        let bookId = book[0].id;
        await db.sequelize.query(
          "INSERT INTO bookshelves (entry, \"bookId\", \"userId\", pages) VALUES (:title, :bookId, :userId, :pages)", {
            replacements: {
              title: title,
              bookId: bookId,
              userId: userId,
              pages: pages
            },
            type: QueryTypes.INSERT
          })
        res.json(body);
      } else {
        res.status(400).json({
          message: "Cannot find book.",
        });
      }
    });
  } catch (err) {
    console.error(err.message); 
  }
});



// Remove a book from library
router.delete("/:id", async (req, res) => {
  const body = req.body;
  let id = req.params.id;

  try {
    await db.sequelize.query(
      "DELETE FROM bookshelves WHERE id = :id", {
        replacements: { id: id },
        type: QueryTypes.DELETE
      })
        res.json(body);
  } catch (err) {
    console.error(err.message); 
  }
});



module.exports = router;
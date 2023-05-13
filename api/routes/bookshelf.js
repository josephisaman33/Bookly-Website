const express = require("express");
const router = express.Router();

// Sequelize
const { QueryTypes } = require("sequelize");
const db = require("../db/db");

// Database Models
const User = require("../db/models/User");
const Books = require("../db/models/Books");
const Bookshelf = require("../db/models/Bookshelf");
const { type } = require("@testing-library/user-event/dist/type");

// Database Relations
Books.hasMany(Bookshelf, { onDelete: 'cascade' });
Bookshelf.belongsTo(Books);
User.hasMany(Bookshelf, { onDelete: 'cascade'});
Bookshelf.belongsTo(User);





//check if user is authenticated using isauthenticated middleware             
//pass in user id from isAuthenticated middleware               ????? Ask CC about this
//for book id, pass in from body



// TO DO: Limit to get all books from a specific user
// Get currently reading books
router.get("/", async (req, res) => {
  try {
    let ok = await db.sequelize.query(
      "SELECT bs.id, b.title, b.author, b.img_url, bs.bookmark, bs.pages, bs.started FROM books b JOIN bookshelves bs ON b.id = bs.\"bookId\" WHERE bs.\"userId\" = 1 AND bs.finished IS NULL", {
        type: QueryTypes.SELECT
       }
    );
    res.json(ok);
  } catch (err) {
    console.error(err.message);
  }
});


// TO DO: Limit to get all books from a specific user
// Get completed books
// router.get("/finished", async (req, res) => {
//   try {
//     let ok = await db.sequelize.query(
//       "SELECT bs.id, b.title, b.author, b.img_url, bs.bookmark, bs.pages, bs.started, bs.finished FROM books b JOIN bookshelves bs ON b.id = bs.\"bookId\" WHERE bs.\"userId\" = 1 AND bs.finished IS NOT NULL", {
//         type: QueryTypes.SELECT
//        }
//     );
//     res.json(ok);
//   } catch (err) {
//     console.error(err.message);
//   }
// });


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
          "INSERT INTO bookshelves (entry, \"bookId\", \"userId\", pages, started) VALUES (:title, :bookId, :userId, :pages, CURRENT_DATE)", {
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



// Update a bookmark
router.put("/:id", async (req, res) => {
  const body = req.body;
  let id = req.params.id;
  // let id = req.body.id;
  let bookmark = req.body.bookmark;
  try {
    console.log(body);
    await db.sequelize.query(
      "UPDATE bookshelves SET bookmark = :bookmark WHERE id = :id", {
        replacements: {
          id: id,
          bookmark: bookmark
        },
        type: QueryTypes.UPDATE
      })
    res.json("Bookmark was updated!");
  } catch (err) {
    console.error(err.message);
  }
})



module.exports = router;
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


///////////// REQUESTS /////////////

// Get reflections
router.get("/:email", async (req, res) => {
    let user_email = req.params.email;
    try {
      let ok = await db.sequelize.query(
       `SELECT bs.id,
               b.title,
               b.author,
               b.img_url,
               bs.rating,
               bs.reflection
        FROM   books b
               JOIN bookshelves bs
                 ON b.id = bs.\"bookId\"
               JOIN users u
                 ON u.id = bs."userId"
        WHERE  u.email = :user_email
               AND bs.finished IS NOT NULL
        ORDER BY bs.finished DESC,
                 bs.id DESC `, {
        replacements: { user_email: user_email },
        type: QueryTypes.SELECT
         }
      );
      res.json(ok);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  
  
  // Update a reflection
  router.put("/:id", async (req, res) => {
    const body = req.body;
    let id = req.params.id;
    let rating = req.body.rating;
    let reflection = req.body.reflection;
    try {
      await db.sequelize.query(
        `UPDATE bookshelves 
         SET    rating = :rating, 
                reflection = :reflection 
         WHERE id = :id`, {
          replacements: {
            id: id,
            rating: rating,
            reflection: reflection
          },
          type: QueryTypes.UPDATE
        })
        res.json(body);
      } catch (err) {
        console.error(err.message);
      }
  })



module.exports = router;

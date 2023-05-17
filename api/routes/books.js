 const express = require("express");
 const router = express.Router();

// Sequelize
 const { QueryTypes } = require("sequelize");
 const db = require("../db/db");

///Database Models
 const Books = require("../db/models/Books");



 router.get("/", async (req, res) => {
     let entry = req.params.entry;
     try {
         let book = await db.sequelize.query(
             "SELECT * FROM books WHERE LOWER(title) = LOWER(:entry)", {
               replacements: { entry: entry },
               type: QueryTypes.SELECT
             })
         res.json(book);
     } catch (err) {
         console.error(err.message);
     }
 });



 router.post("/", async (req, res) => {
     let entry = req.body.entry;
     let title = req.body.title;
     let author = req.body.author;
     let img_url = req.body.img_url;
     try {
          //Checking if book is already in the database
         await db.sequelize.query(
             "SELECT * FROM books WHERE LOWER(title) = LOWER(:entry)", {
               replacements: { entry: entry },
               type: QueryTypes.SELECT
             })
         .then(async function (rtrnBooks) {
            //If the book isn't in the database, add it
             if ( rtrnBooks.length === 0) {
                 await db.sequelize.query(
                     "INSERT INTO books (title, author, img_url) VALUES (:title, :author, :img_url) ", {
                       replacements: { 
                         title: title,
                         author: author,
                         img_url: img_url
                     },
                       type: QueryTypes.INSERT
                     })
                 res.json("Added a book!");
             } else {
                 await db.sequelize.query(
                     "UPDATE books SET title = :title, author = :author, img_url = :img_url WHERE title = :title", {
                       replacements: { 
                         title: title,
                         author: author,
                         img_url: img_url
                     },
                       type: QueryTypes.UPDATE
                     })

                 res.send("Updated a book!");
             }
         })
     } catch (err) {
         console.error(err.message);
     }





    //  try {
    //      await db.sequelize.query(
    //          "INSERT INTO books (title, author, img_url) VALUES (:title, :author, :img_url)", {
    //            replacements: { 
    //              title: title,
    //              author: author,
    //              img_url: img_url
    //          },
    //            type: QueryTypes.INSERT
    //          })
    //      res.json(req.body);
    //  } catch (err) {
    //      console.error(err.message);
    //  }
 });





 module.exports = router;
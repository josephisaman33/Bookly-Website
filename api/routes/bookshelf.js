const express = require('express');
const router = express.Router();
const db = require("../db/db");
const  Bookshelf  = require("../db/models/Bookshelf");  // I have no idea why its /db/db and not /db/Bookshelf. I got the idea from ./index.js

async function initializeTables() {
    await db.sequelize.sync({ alter: true });
  }
  
  initializeTables().then((res) => {
    console.log(
      "[Sequelize]: Successfully synced tables. Turn this off in production in order to avoid data loss."
    );
  });




router.get("/", (req, res) => {
    res.json("Hello World");
});

router.post("/", async (req, res) => {
        const body = req.body;
        await Bookshelf.create({ entry: body.entry });
        res.json(body);

});


module.exports = router;
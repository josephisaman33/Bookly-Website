const express = require("express");
const router = express.Router();
const { QueryTypes } = require("sequelize");
const db = require("../db/db");
const Bookshelf = require("../db/models/Bookshelf");

router.get("/", (req, res) => {
  res.json("Hello World");
});

router.post("/", async (req, res) => {
  const body = req.body;
  await Bookshelf.create({ entry: body.entry });
  res.json(body);
});

module.exports = router;
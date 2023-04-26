const express = require("express");
const router = express.Router();

// Body Parser
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Sequelize
const { QueryTypes } = require("sequelize");
const db = require("../db/db");

// bcrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Database Models
const User = require("../db/models/User");
const Books = require("../db/models/Books");

// Cryptography
const jwt = require("jsonwebtoken");

// Model Initialization
async function initializeTables() {
  await db.sequelize.sync({ alter: true });
}

initializeTables().then((res) => {
  console.log(
    "[Sequelize]: Successfully synced tables. Turn this off in production in order to avoid data loss."
  );
});

// Routes for non-authenticated users.
router.post("/login", async function (req, res) {
  let email = req.body.email;
  let password = req.body.password;

  // STEP 1: Find user by email in database.
  try {
    db.sequelize
      .query("SELECT * FROM users WHERE email=?", {
        replacements: [email],
        type: QueryTypes.SELECT,
        model: User,
      })
      .then(async function (users) {
        if (users.length > 0) {
          const user = users[0];

          // STEP 2: Compare passwords in database with hash.
          user.isCorrectPassword(password, function (err, result) {
            if (result) {
              // STEP 3: Log the user in.

              const token = jwt.sign({ email }, process.env.SECRET, {
                expiresIn: "7d",
              });

              // STEP 4: Sends generated token to front-end.
              res.cookie("token", token, { httpOnly: true });

              res.status(200).json({
                message: "Redirecting...",
              });
            } else if (err) {
              res.status(500).json({
                message: "Internal Server Error. Please try again.",
              });
            } else {
              res.status(401).json({
                message: "Incorrect Email or Password.",
              });
            }
          });
        } else {
          res.status(401).json({
            message: "Incorrect Email or Password.",
          });
        }
      });
  } catch (e) {
    res.status(500).json({
      message: "Internal Server Error, please try again.",
    });
  }
});

router.post("/register", async function (req, res) {
  let email = req.body.email;
  let password = req.body.password;

  // STEP 1: Check if user already exists on the database.
  try {
    db.sequelize
      .query("SELECT * FROM users WHERE email=?", {
        replacements: [email],
        type: QueryTypes.SELECT,
        model: User,
      })
      .then(async function (users) {
        if (users.length === 0) {
          // STEP 2: If user does not already exists, hash password in bcrypt.
          const hash = await bcrypt.hash(password, saltRounds);

          // STEP 3: Once hash is completed, create the user model and store the new user into the database.
          await User.create({
            id: null,
            email: req.body.email,
            password: hash,
            phone: req.body.phone,
          });

          res.status(201).json({
            message: "Successfully created user.",
          });
        } else {
          res.status(400).json({
            message: "User already exists.",
          });
        }
      });
  } catch (e) {
    console.error("/api/signup: " + e.message);
  }
});

// Secured Routes with Authentication Required.
const isAuthenticated = require("../middleware");

router.get("/signout", isAuthenticated, function (req, res) {
  res.clearCookie("token");
  res.sendStatus(200);
});

router.get("/checkToken", isAuthenticated, function (req, res) {
  res.sendStatus(200);
});

router.get("/account", isAuthenticated, function (req, res) {
  User.findOne({
    where: {
      email: req.email,
    },
  })
    .then((user) => {
      res.json({
        user: user,
        isMe: true,
      });
    })
    .catch((_) => {
      res.sendStatus(400);
    });
});

module.exports = router;

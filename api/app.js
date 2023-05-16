require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var apiRouter = require("./routes/api");
var booksRouter = require("./routes/books");
var bookshelfRouter = require("./routes/bookshelf");

var app = express();

//Database imports
const { QueryTypes } = require("sequelize");
const db = require("./db/db");

const User = require("./db/models/User");
const Books = require("./db/models/Books");
const Bookshelf = require("./db/models/Bookshelf");

async function initializeTables() {
  await db.sequelize.sync({ alter: true });
}

initializeTables().then((res) => {
  console.log(
    "[Sequelize]: Successfully synced tables."
  );
});

//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.use("/api", apiRouter);
app.use("/books", booksRouter);
app.use("/bookshelf", bookshelfRouter);
//app.use("/router", reflectionRouter);


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;

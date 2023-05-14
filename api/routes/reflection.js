const express = require("express");
const router = express.Router();

// Sequelize
const { QueryTypes } = require("sequelize");
const db = require("../db/db");

// Database Models
const User = require("../db/models/User");
const Books = require("../db/models/Books");
const Bookshelf = require("../db/models/Bookshelf");
const Reflection = require("../db/models/Reflection")
const { type } = require("@testing-library/user-event/dist/type");

// Database Relations
Books.hasMany(Bookshelf, { onDelete: 'cascade' });
Bookshelf.belongsTo(Books);

User.hasMany(Bookshelf, { onDelete: 'cascade'});
Bookshelf.belongsTo(User);

Reflection.hasOne(Bookshelf);
Bookshelf.belongsTo(Reflection);

Books.hasMany(Reflection);
Reflection.belongsTo(Books);

User.hasMany(Reflection);
Reflection.belongsTo(User);




// Requests



module.exports = router;
const db = require("../db");
const Sequelize = require("sequelize");

let Bookshelf = db.sequelize.define("bookshelf", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  entry: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Bookshelf;

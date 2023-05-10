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
  bookmark: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  pages: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
}, {timestamps:false});


module.exports = Bookshelf;

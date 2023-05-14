const db = require("../db");
const Sequelize = require("sequelize");

let Reflection = db.sequelize.define("reflection", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  reflection: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
}, {timestamps:false});


module.exports = Reflection;
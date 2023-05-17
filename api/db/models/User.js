const db = require("../db");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

//Defining models made in reference to: https://sequelize.org/docs/v6/core-concepts/model-basics/
let User = db.sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  passwordfirstletter: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  notificationjob1: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  notificationjob2: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  notificationjob3: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  notificationjob4: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  notificationjob5: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

//bycrpyt password check made in reference to: https://www.npmjs.com/package/bcrypt
//Check Password
User.prototype.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, result) {
    if (err) return callback(err, false);
    return callback(err, result);
  });
};

//Prevents password to front-end
User.prototype.toJSON = function () {
  var values = Object.assign({}, this.get());

  delete values.password;
  return values;
};

module.exports = User;

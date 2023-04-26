const db = require("../db");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

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
    allowNull: false,
  },
});

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

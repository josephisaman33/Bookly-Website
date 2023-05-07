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
  // bookmark: {
  //   type: Sequelize.INTEGER,
  //   allowNull: true,
  // },
  pages: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
}, {timestamps:false});

// Bookshelf.associate = (models) => {
//   models.Bookshelf.belongsTo(models.Books, {
//     onDelete: "cascade",
//   });
// };

module.exports = Bookshelf;

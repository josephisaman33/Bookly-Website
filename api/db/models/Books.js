const db = require("../db");
const Sequelize = require("sequelize");

let Books = db.sequelize.define("books", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  isbn10: {
    type: Sequelize.CHAR(10),
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  img_url: {
    type: Sequelize.STRING,
    allowNull: true,
  }
}, {timestamps:false});

// Books.associate = (models) => {
//   models.Books.hasMany(models.Bookshelf);
// };



module.exports = Books;



// INSERT INTO books(isbn10, title, author, img_url)
// VALUES ('0064400468','Freaky Friday','Mary Rodgers','http://images.amazon.com/images/P/0064400468.01.LZZZZZZZ.jpg'),
//   ('185326041X','The Great Gatsby','F. Scott Fitzgerald','http://images.amazon.com/images/P/185326041X.01.LZZZZZZZ.jpg'),
//   ('0788789562','The Hobbit','J. R. R. Tolkien','http://images.amazon.com/images/P/0788789562.01.LZZZZZZZ.jpg'),
//   ('1593080484','Persuasion','Jane Austen','http://images.amazon.com/images/P/1593080484.01.LZZZZZZZ.jpg'),
//   ('1573226122','Lord of the Flies','William Golding','http://images.amazon.com/images/P/1573226122.01.LZZZZZZZ.jpg');


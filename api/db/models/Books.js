const db = require("../db");
const Sequelize = require("sequelize");

let Books = db.sequelize.define("books", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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


module.exports = Books;



// INSERT INTO books (img_url, title, author)
// VALUES ('http://ecx.images-amazon.com/images/I/51%2BwtoqfG6L.jpg','Spider-Verse','Dan Slott'),
// ('http://ecx.images-amazon.com/images/I/411pakPjvdL.jpg','The Old Man and The Sea','Ernest Hemingway'),
// ('http://ecx.images-amazon.com/images/I/51ibL6AL-GL.jpg','Pride And Prejudice','Jane Austen'),
// ('http://ecx.images-amazon.com/images/I/31kc16H5YjL.jpg','The Catcher in the Rye','J. D. Salinger'),
// ('http://ecx.images-amazon.com/images/I/313cFTb5BFL.jpg','Watchmen','Alan Moore'),
// ('http://ecx.images-amazon.com/images/I/51ep6WWIpFL.jpg','Batman: The Dark Knight Returns','Frank Miller'),
// ('http://ecx.images-amazon.com/images/I/51LoG5uYr7L.jpg','Wolverine: Old Man Logan','Mark Millar');

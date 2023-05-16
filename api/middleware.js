//express middleware: https://expressjs.com/en/guide/using-middleware.html
//jwt: https://www.npmjs.com/package/jsonwebtoken

const jwt = require("jsonwebtoken");
const User = require("./db/models/User");

const isAuthenticated = async function (req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    res.sendStatus(401);
  } else {
    jwt.verify(token, process.env.SECRET, async function (err, decoded) {
      if (err) {
        res.sendStatus(401);
      } else {
        req.email = decoded.email;
        const user = await User.findOne({ where: { email: req.email } });

        if (user !== null) {
          next();
        } else {
          res.sendStatus(401);
        }
      }
    });
  }
};
module.exports = isAuthenticated;

const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "ABEL", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
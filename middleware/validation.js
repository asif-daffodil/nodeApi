const { check } = require("express-validator");
const validate = [
  check("uname").exists().withMessage("please provide the user name"),
];

module.exports = { validate };

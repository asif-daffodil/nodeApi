const api = require("../api/api.json");
const { validationResult } = require("express-validator");

const getRandomUser = (req, res) => {
  res.render("randomUser.ejs", api[Math.floor(Math.random() * api.length)]);
};

const getAllUser = (req, res) => {
  let limit = req.query.limit;
  res.render("allUser.ejs", { users: api, limit: limit });
};

const create = (req, res) => {
  res.render("addUser.ejs");
};

const store = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render("addUser.ejs", { errors: errors.array() });
  }
};

module.exports = { getRandomUser, getAllUser, create, store };

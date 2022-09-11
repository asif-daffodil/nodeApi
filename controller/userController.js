const express = require("express");
const app = express();
const api = require("../api/api.json");
const getRandomUser = (req, res) => {
  res.render("randomUser.ejs", api[Math.floor(Math.random() * api.length)]);
};

const getAllUser = (req, res) => {
  let limit = req.query.limit;
  res.render("allUser.ejs", { users: api, limit: limit });
};

module.exports = { getRandomUser, getAllUser };

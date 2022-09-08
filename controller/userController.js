const express = require("express");
const app = express();
const api = require("../api/api.json");
const checkLimitParams = require("../middleware/checkLimitParams");
const getRandomUser = (req, res) => {
  res.render("randomUser.ejs", api[Math.floor(Math.random() * api.length)]);
};

const getAllUser = (req, res) => {
  console.log(checkLimitParams);
  res.render("allUser.ejs", { users: api });
};

module.exports = { getRandomUser, getAllUser };

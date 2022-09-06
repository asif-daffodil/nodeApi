const api = require("../api/api.json");
const getRandomUser = (req, res) => {
  res.send(api[Math.floor(Math.random() * api.length)]);
};

module.exports = { getRandomUser };

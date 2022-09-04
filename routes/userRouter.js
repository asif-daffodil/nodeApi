const express = require("express");
const { getRandomUser } = require("../controller/userController");
const router = express.Router();

router.route("/user/random").get((req, res) => {
  getRandomUser(req, res);
});

module.exports = router;

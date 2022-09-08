const express = require("express");
const { getRandomUser, getAllUser } = require("../controller/userController");
const router = express.Router();

router.route("/user/random").get(getRandomUser);
router.route("/user/all").get(getAllUser);

module.exports = router;

const express = require("express");
const { getRandomUser, getAllUser } = require("../controller/userController");
const router = express.Router();
const { checkLimitParams } = require("../middleware/checkLimitParams");

router.route("/user/random").get(getRandomUser);
router.route("/user/all").get(checkLimitParams, getAllUser);

module.exports = router;

const express = require("express");
const {
  getRandomUser,
  getAllUser,
  create,
  store,
} = require("../controller/userController");
const router = express.Router();
const { checkLimitParams } = require("../middleware/checkLimitParams");

const { validate } = require("../middleware/validation");

router.route("/user/random").get(getRandomUser);
router.route("/user/all").get(checkLimitParams, getAllUser);
router.route("/user/create").get(create);
router.route("/user/save").post(validate, store);

module.exports = router;

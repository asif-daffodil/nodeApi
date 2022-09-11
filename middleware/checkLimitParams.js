const checkLimitParams = (req, res, next) => {
  if (!req.query.limit) {
    res.redirect("/user/all?limit=5");
  }
  next();
};

module.exports = { checkLimitParams };

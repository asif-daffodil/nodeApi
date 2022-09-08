let limit;
const checkLimitParams = (req, res, next) => {
  res.send("halum");
  next();
};

module.export = { checkLimitParams };

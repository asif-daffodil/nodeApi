const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
let ejs = require("ejs");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/", userRouter);
app.use("*", (req, res) => {
  res.render("404.ejs");
});
app.listen(5000, () => {});

const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
app.use("/", userRouter);
app.use("*", (req, res) => {
  res.send("No route found");
});
app.listen(5000, () => {});

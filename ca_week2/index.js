const express = require("express");
const app = express();
const mongoose = require("mongoose");
const leaderRouter = require("./routes/leaderRouter");
const promoRouter = require("./routes/promoRouter");

mongoose
  .connect("mongodb://localhost/vamsi", { useFindAndModify: false })
  .then((result) => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.urlencoded({ extended: true }));
app.use("/leader", leaderRouter);
app.use("/promotion", promoRouter);

app.listen(3000, () => {
  console.log("Server is running");
});

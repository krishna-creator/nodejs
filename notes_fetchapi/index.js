const express = require("express");
const mongoose = require("mongoose");
const app = express();
const noteRouter = require("./routes/note");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

mongoose.connect(
  "mongodb://localhost:27017/vamsi",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected to database");
    }
    //   record
    //     .create({ msg: "testing" })
    //     .then((result) => {
    //       console.log(result);
    //       return record.find({});
    //     })
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
  }
);
app.use("/notes", noteRouter);
app.listen(3000, () => {
  console.log("connected to server");
});

const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const record = require("./model/record");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/vamsi", (err) => {
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
});
app.get("/", (req, res) => {
  console.log("user entered message");
  res.sendFile("index");
});
app.post("/", (req, res) => {
  record
    .create(req.body)
    .then((resut) => {
      return record.find({});
    })
    .then((data) => {
      console.log(data);
    });
});

app.listen(3000, () => {
  console.log("connected to server");
});

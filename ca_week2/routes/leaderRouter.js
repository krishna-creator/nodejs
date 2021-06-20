const express = require("express");
const mongoose = require("mongoose");
const leader = require("../model/leader");

const app = express();
app
  .router("/")
  .get((req, res) => {
    leader
      .find([])
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .post((req, res) => {
    leader
      .create(req.body)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

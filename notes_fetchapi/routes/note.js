const express = require("express");
const record = require("../model/record");

const noteRouter = express.Router();
noteRouter.use(express.json());

noteRouter
  .route("/")
  .get((req, res) => {
    record
      .find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .post((req, res) => {
    record
      .create(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
noteRouter
  .route("/:id")
  .get((req, res) => {
    record
      .findById(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .put((req, res) => {
    record
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .delete((req, res) => {
    record
      .findByIdAndDelete(req.params.id)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

module.exports = noteRouter;

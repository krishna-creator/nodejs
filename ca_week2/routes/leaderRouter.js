const express = require("express");
const leader = require("../model/leader");
const leaderRouter = express.Router();

leaderRouter.use(express.urlencoded({ extended: true }));
leaderRouter.use(express.json());
leaderRouter
  .route("/")
  .get((req, res) => {
    leader
      .find({})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .post((req, res) => {
    leader
      .create(req.body)
      .then((data) => {
        res.setHeader("Content-Type", "application/json");
        res.json(req.body);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .put((req, res) => {
    res.send("Put operation is not supported");
  })
  .delete((req, res) => {
    leader
      .remove({})
      .then((result) => {
        res.setHeader("Content-Type", "application/json");
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
leaderRouter
  .route("/:leaderid")
  .get((req, res) => {
    leader
      .findById(req.params.leaderid)
      .then((result) => {
        res.setHeader("Content-Type", "application/json");
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .post((req, res) => {
    res.send("Post operation is not supported Here");
  })
  .put((req, res) => {
    leader
      .findByIdAndUpdate(req.params.leaderid, req.body, { new: true })
      .then((result) => {
        res.setHeader("Content-Type", "application/json");
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .delete((req, res) => {
    leader
      .findByIdAndDelete(req.params.leaderid)
      .then((result) => {
        res.setHeader("Content-Type", "application/json");
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

module.exports = leaderRouter;

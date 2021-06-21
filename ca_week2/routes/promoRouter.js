const express = require("express");
const promotion = require("../model/promotion");
const promoRouter = express.Router();

promoRouter.use(express.urlencoded({ extended: true }));
promoRouter.use(express.json());
promoRouter
  .route("/")
  .get((req, res) => {
    promotion
      .find({})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .post((req, res) => {
    promotion
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
    promotion
      .remove({})
      .then((result) => {
        res.setHeader("Content-Type", "application/json");
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
promoRouter
  .route("/:promotionid")
  .get((req, res) => {
    promotion
      .findById(req.params.promotionid)
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
    promotion
      .findByIdAndUpdate(req.params.promotionid, req.body, { new: true })
      .then((result) => {
        res.setHeader("Content-Type", "application/json");
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .delete((req, res) => {
    promotion
      .findByIdAndDelete(req.params.promotionid)
      .then((result) => {
        res.setHeader("Content-Type", "application/json");
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

module.exports = promoRouter;

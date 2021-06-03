const express = require("express");
const promotionsrouter = express.Router();

promotionsrouter
  .route("/")
  .get((req, res, next) => {
    res.end("Will send all the promotions to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the promotion: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotions");
  })
  .delete((req, res, next) => {
    res.end("Deleting all promotions");
  });

promotionsrouter
  .route("/:promotionid")
  .get((req, res, next) => {
    res.send(
      "Will send the details of the promotion: " +
        req.params.promotionid +
        " to you"
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      "POST operation not supported on /promotion/" + req.params.promotionid
    );
  })

  .put((req, res, next) => {
    res.write("Updating the promotion: " + req.params.promotionid + "\n");
    res.end(
      "Will update the promotion: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })

  .delete((req, res, next) => {
    res.end("Deleting promotion: " + req.params.promotionid);
  });
module.exports = promotionsrouter;

const express = require("express");
const dishrouter = express.Router();
dishrouter
  .route("/:dishid")
  .get((req, res, next) => {
    res.send(
      "Will send the details of the dish: " + req.params.dishid + " to you"
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /dishes/" + req.params.dishId);
  })

  .put((req, res, next) => {
    res.write("Updating the dish: " + req.params.dishId + "\n");
    res.end(
      "Will update the dish: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })

  .delete((req, res, next) => {
    res.end("Deleting dish: " + req.params.dishId);
  });
module.exports = dishrouter;

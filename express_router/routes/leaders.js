const express = require("express");
const leadersrouter = express.Router();

leadersrouter
  .route("/")
  .get((req, res, next) => {
    res.end("Will send all the leaders to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the leader: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /leaders");
  })
  .delete((req, res, next) => {
    res.end("Deleting all leaders");
  });

leadersrouter
  .route("/:leaderid")
  .get((req, res, next) => {
    res.send(
      "Will send the details of the leader: " + req.params.leaderid + " to you"
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /leaders/" + req.params.leaderid);
  })

  .put((req, res, next) => {
    res.write("Updating the leader: " + req.params.leaderid + "\n");
    res.end(
      "Will update the leader: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })

  .delete((req, res, next) => {
    res.end("Deleting leader: " + req.params.leaderid);
  });
module.exports = leadersrouter;

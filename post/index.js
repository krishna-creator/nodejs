const express = require("express");
app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  if (req.body.username && req.body.password) {
    res.send("Welcome" + req.body.username);
  }
  res.status(404).send("please fill required information");
});

app.listen(5000, () => {
  console.log("server is running successfully");
});

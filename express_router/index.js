const express = require("express");
const port = 3000;
const hostname = "localhost";

app = express();
const dishrouter = require("./routes/dish.js");
const promotionsrouter = require("./routes/promotions");
const leadersrouter = require("./routes/leaders");

app.use("/dishes", dishrouter);
app.use("/leaders", leadersrouter);
app.use("/promotions", promotionsrouter);

app.listen(port, hostname, (err) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("server running at http://" + hostname + ":" + port);
  }
});

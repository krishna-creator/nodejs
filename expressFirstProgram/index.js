const http = require("http");
const hostname = "localhost";
const port = "3000";
const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<html><body><h1>Hey, This visible only when invalid url is given</h1></body></html>"
  );
});
const server = http.createServer(app);
server.listen(port, hostname);

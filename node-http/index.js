const http = require("http");
const hostname = "localhost";
const port = 3000;
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  var fileurl;
  if (req.url == "/") {
    fileurl = "/index.html";
  } else {
    fileurl = req.url;
  }
  var filepath = path.resolve("./public" + fileurl);
  fs.access(filepath, (err) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end("<html><body>File not found</body></html>");
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream(filepath).pipe(res);
  });
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

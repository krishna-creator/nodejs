const fs = require("fs");

console.log("start");

fs.readFile("./first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
  fs.readFile("./second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    fs.writeFile(
      "./first.txt",
      "this is append text",
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result + "first wirte file");
        fs.writeFile(
          "./second.txt",
          "this is append text",
          { flag: "a" },
          (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log(result + "second write file");
          }
        );
      }
    );
  });
});

console.log("second program");
console.log("third program");

console.log("fourth program");

console.log("fifth program");

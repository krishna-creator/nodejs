var rect = require("./rectangel");
var cal = (x, y) => {
  console.log("start the program");
  rect(x, y, (err, rectangle) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(rectangle.area());
      console.log(rectangle.perimeter());
    }
  });
  console.log("end the program");
};
cal(2, 3);
cal(3, 3);
cal(4, 5);
cal(0, 3);
cal(2, 0);

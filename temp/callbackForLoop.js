console.log("first task");
var h2;
const message = (i, callback) => {
  console.log("hi");
  for (let j = 0; j < i; j++) {
    h2 = document.querySelector("h2");
  }
  callback();
};
message(1000000, () => {
  console.log("first taks runs");
  h2.textContent = "hey, this take some time";
  console.log("first task ends");
});
console.log("second task");

const { MongoClient } = require("mongodb");
var url = " mongodb://127.0.0.1:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected successfully");
    const db = result.db("vamsi");
    const collection = db.collection("soch");
    collection.insertOne({ name: "sanjith", vtu: "14737" }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
      collection.find({}).toArray((err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
        collection.deleteOne({ name: "sanjith" }, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
      });
    });
  }
});

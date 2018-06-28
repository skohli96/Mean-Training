var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("sample");
  var myobj = [
    { length: 3, breadth: 2},
    { length: 4, breadth: 3},
    { length: 5, breadth: 2},
    { length: 3, breadth: 6},
    { length: 5, breadth: 7},
    { length: 4, breadth: 6},
    { length: 4, breadth: 7},
  ];
  dbo.collection("rectangle").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/sample",function(err,db){
    if(err){
        console.log(err);
    }
    else{
        var dbo = db.db("sample");
        dbo.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
        })
        
        }
});

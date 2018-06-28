var http=require("http");
var data=require("./data/inventory");
var d=require('./4_httpbl.js');
http.createServer(function(req,res){
    if(req.url=="/"){
        res.end(JSON.stringify(data));
    }else if(req.url==="/instock"){
        d.inStock(res);
    }else if(req.url==="/onbackorder"){
        d.onBackOrder(res);
    }else{
        res.end("404 error...Data not found");
    }    
}).listen(3000);
console.log("Server listening on port 3000");


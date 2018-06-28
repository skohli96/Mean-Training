var fs=require("fs");
fs.readFile('inputa.txt',function(err,data)
{
    if(err){
        console.log(err);
    }
    else{
        console.log("Asynchronous read: " + data.toString());
    }
})
console.log("Program ended");
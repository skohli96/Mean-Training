var fs=require('fs');
try{
var data=fs.readFileSync('input.txt');
console.log("Synchronous Read: " + data.toString());
}
catch(err){
    console.log("Error =>"+err);
}
console.log("Program Ended");
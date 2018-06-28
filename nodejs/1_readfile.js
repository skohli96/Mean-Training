var fs=require('fs');
try{
var data=fs.read FileSync('input.txt','newfile');
console.log("Synchronous Read: " + data.toString());
}
catch(err){
    console.log("Error =>"+err);
}
console.log("Program Ended");
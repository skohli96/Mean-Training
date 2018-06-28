var a=0;
function ShowResults(value){
    a+=value;
}


var letters=[10,20,30,40];
letters.forEach(ShowResults);
console.log("Sum: "+a);
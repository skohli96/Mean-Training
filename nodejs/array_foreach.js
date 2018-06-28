var a=0;
function ShowResults(value){
    a+=value;
    console.log("value: "+a);
}
var letters=[10,20,30,40];
letters.forEach(ShowResults);
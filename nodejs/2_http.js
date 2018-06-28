var http=require('http');
var server=http.createServer(function(request,response){
    console.log('resquesttstaring...');

console.log(request.method);
if(request.url=="/hello"){  
    response.write("hello client");
    response.end();
}
if(request.url=="/lnt"){
    response.write(JSON.parse({username:"abc",age:16}));
    response.end()
    }
});
server.listen(3000);
console.log("Server running at http://127.0.0.1:3000");
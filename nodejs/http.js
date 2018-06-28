var http=require('http');
var server=http.createServer(function(url,response){
    console.log('request starting..');


    if(request.url==url)
    {
        response.write('hello sonu tightagi come '); 
    }

    //respond
    response.write('hello eve ');
    response.end();
    });
    server.listen(3000);
    console.log('server running at http://172.29.122.210:3000/');
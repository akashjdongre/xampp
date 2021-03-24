
const http = require('http');
const server = http.createServer((req,resp)=>
{	
	resp.write(200 , {"Content-type" : "text/html"})
    resp.end('Hello World !');
});

server.listen(3000 , 'localhost',(err,data)=>{
    console.log('Server Started');
});
const http = require('http')
const fs = require('fs')
//writeHead(statusCode: number, statusMessage?: string | undefined, headers?: http.OutgoingHttpHeaders | http.OutgoingHttpHeader[] | undefined): http.ServerResponse<http.IncomingMessage> & { req: http.IncomingMessage; }
const server = http.createServer((req,res)=>{
    // res.end(req.url)
    //req.method GET,POST,DELETE, PUT
    if (req.url === '/'){
        res.writeHead(200,{'Content-type':'text/plain'})
        res.end("home page")
    }else if(req.url === '/about'){
        res.writeHead(200,{'Content-type':'text/plain'})
        res.end("about page")
    }else if(req.url === '/api'){
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(JSON.stringify({
            firstname:"malar",
            lastname:"mani"}))
    }else{
        res.writeHead(404)
        res.end("page is not found")
    }
});
server.listen(3000,()=>{
    console.log('server runing on port 3000');
}) //port no:
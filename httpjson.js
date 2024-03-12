const http = require('http')

//writeHead(statusCode: number, statusMessage?: string | undefined, headers?: http.OutgoingHttpHeaders | http.OutgoingHttpHeader[] | undefined): http.ServerResponse<http.IncomingMessage> & { req: http.IncomingMessage; }
const server = http.createServer((req,res)=>{
    const peyar = {
        firstname:"mani",
        lastname:"malar"
    }
    res.writeHead(200,{'Content-type':'application/json'})
    res.end(JSON.stringify(peyar))
});
server.listen(3000,()=>{
    console.log('server runing on port 3000');
}) //port no:
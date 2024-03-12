const http = require('http')
const fs = require('fs')

//writeHead(statusCode: number, statusMessage?: string | undefined, headers?: http.OutgoingHttpHeaders | http.OutgoingHttpHeader[] | undefined): http.ServerResponse<http.IncomingMessage> & { req: http.IncomingMessage; }
const server = http.createServer((req,res)=>{
    const name="malar"
    res.writeHead(200,{'Content-type':'text/html'})
    // fs.createReadStream('./html.html').pipe(res)
    let html = fs.readFileSync('./html.html','utf-8');
    html =html.replace('{{name}}',name)
    res.end(html)
});
server.listen(3000,()=>{
    console.log('server runing on port 3000');
}) //port no:
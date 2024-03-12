const https = require('https')
// const crypto = require('crypto')
// console.log("expriment 5");
// console.log("increase thread pool size");
// process.env.UV_THREADPOOL_SIZE = 17;
const MAX_CALLS = 12;
const start = Date.now();
for(let i=0;i<MAX_CALLS; i++){
    https
    .request('https://www.google.com',(res)=>{
        res.on("data",()=>{});
        res.on("end",()=>{
            console.log(`Request: ${i+1}`,Date.now() - start);
        });
    })
    .end();
    // crypto.pbkdf2("password","salt",100000,512,"sha512", ()=>{
    //     console.log(`Hash  ${i+1}:`,Date.now() - start1);
    // });
}

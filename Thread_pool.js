// const fs = require('node:fs')
// console.log("first");

// fs.readFile("./Files/day.txt" , "utf8" , (err,data)=>{
//     console.log("file contents");
// })

// console.log("last");

const crypto = require("crypto");
// console.log("expriment 1")
// const start = Date.now();
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// console.log("Hash:",Date.now() - start);

// console.log("expriment 2")

// const MAX_CALLS = 3;
// const start1 = Date.now();

// for(let i=0;i<MAX_CALLS; i++){
//     crypto.pbkdf2("password","salt",100000,512,"sha512", ()=>{
//         console.log(`Hash : ${i+1}`,Date.now() - start1);
//     });
// }


// console.log("expriment 3");
// console.log("increase thread pool size");
// process.env.UV_THREADPOOL_SIZE = 6;
// const MAX_CALLS = 7;
// const start1 = Date.now();

// for(let i=0;i<MAX_CALLS; i++){
//     crypto.pbkdf2("password","salt",100000,512,"sha512", ()=>{
//         console.log(`Hash  ${i+1}:`,Date.now() - start1);
//     });
// }

// console.log("expriment 4");
// console.log("increase thread pool size");
// process.env.UV_THREADPOOL_SIZE = 4;
// const MAX_CALLS = 5;
// const start1 = Date.now();

// for(let i=0;i<MAX_CALLS; i++){
//     crypto.pbkdf2("password","salt",100000,512,"sha512", ()=>{
//         console.log(`Hash  ${i+1}:`,Date.now() - start1);
//     });
// }

console.log("expriment 5");
console.log("increase thread pool size");
process.env.UV_THREADPOOL_SIZE = 17;
const MAX_CALLS = 17;
const start1 = Date.now();

for(let i=0;i<MAX_CALLS; i++){
    crypto.pbkdf2("password","salt",100000,512,"sha512", ()=>{
        console.log(`Hash  ${i+1}:`,Date.now() - start1);
    });
}

const fs = require ('fs')
const zlip = require('zlib');

const gzip = zlip.createGzip()
const readableStream = fs.createReadStream('./Files/day2.txt',{
    encoding:'utf-8',
    highWaterMark:2,

});
readableStream.pipe(gzip).pipe(fs.WriteStream('./Files/file1.txt.gz'))

const writeableStream = fs.createWriteStream('./Files/file1.txt')

readableStream.pipe(writeableStream)
// readableStream.pipe()

//data event
// readableStream.on('data',(chunk)=>{
//  console.log(chunk);
//  writeableStream.write(chunk)
// });
// fs.createWriteStream()
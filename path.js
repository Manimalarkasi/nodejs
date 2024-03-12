const path = require('path');
// const path = require('node:path');

console.log('default value');

console.log("directory name:",__dirname);
console.log('file name;',__filename);
console.log('basename');
console.log('basename-dir:', path.basename(__dirname));
console.log('basename-file:', path.basename(__filename));
console.log('extance name');

console.log( "directory extance name:",path.extname(__dirname));
console.log('file extance name;',path.extname(__filename));

console.log('prase');
// console.log("directory parse name:",path.parse(__dirname));
console.log('file parse name;',path.parse(__filename));

console.log('formate');
console.log(path.format(path.parse(__filename)));

console.log("isabsolute");
console.log("isAbsolute() directory:",path.isAbsolute(__dirname));
console.log('isAbsolute() file;',path.isAbsolute(__filename));
console.log("data file:",path.isAbsolute("./data.json"));

console.log("join");
console.log("join:",path.join("mani","malar","kasi.html"));
console.log("/join:",path.join("/mani","malar","kasi.html"));
console.log("/join:",path.join("/mani","//malar","kasi.html"));
console.log("../join:",path.join("/mani","//malar","../kasi.html"));
console.log("join file name:",path.join(__dirname, './data.json'));

console.log("resolve");
console.log("resolve:",path.resolve("mani","malar","kasi.html"));
console.log("/resolve:",path.resolve("/mani","malar","kasi.html"));
console.log("/resolve:",path.resolve("/mani","//malar","kasi.html"));
console.log("../resolve:",path.resolve("/mani","//malar","../kasi.html"));
console.log("resolve file name:",path.resolve(__dirname, './data.json'));


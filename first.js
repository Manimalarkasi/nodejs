console.log("manimalar");
// console.log(global);
console.log("-----module------");
const os = require('os');
const path = require('path')
console.log(os.type());
console.log('verson:',os.version());
console.log('homedir:', os.homedir());
console.log('homename;', os.hostname());
console.log('filename:', __filename);
console.log('dirname:', __dirname);
console.log("---------------------------");
console.log('dirname:', path.dirname(__filename));
console.log('extname:', path.extname(__filename));
console.log('basename:', path.basename(__filename));
console.log('isAbsolute:', path.isAbsolute(__filename));
// console.log('relative:', path.relative());
console.log('resolve:', path.resolve(__filename));
console.log('parse:', path.parse(__filename));
console.log('toNamespacedPath:', path.toNamespacedPath(__filename));
console.log('sep:', path.sep);
console.log('delimiter:', path.delimiter);
// console.log('format:', path.format(__dirname));


const math = require('./math')
// console.log('add:',math.add(5,5));
// console.log('sub:',math.sub(5,7));
// console.log('mul:',math.mul(2,4));
// console.log('div',math.div(2,6));
// console.log('pow',math.pow(2,3));
console.log(math.add(5,6));
console.log(add(5,5));
console.log('sub:',sub(5,7));
console.log('mul:',mul(2,4));
console.log('div',div(2,6));
console.log('pow',pow(2,3));


console.log("-----module scope --------");
require('./life');

console.log("-----module wrapper --------");
require('./man1');
require('./man2');
console.log("-----module caching--------");
// require('./modulecching')
const caching = require('./modulecching')
console.log('1st:', caching.getName());
caching.setName('mani');
console.log('2nd:', caching.getName());

const newCaching = require('./modulecching');
console.log('NewCacing:', newCaching.getName());




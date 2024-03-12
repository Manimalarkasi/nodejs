// import { readFile } from 'node:fs';

// readFile('../day.txt', (err, data) => {
//   // if (err) throw err;
//   console.log(data.values());
// }); 

// import { readFile } from 'fs';

// readFile('./File/day.txt', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log(data.toString());
// });



const day = require('./Files/day.txt')
console.log('day:',day.data);
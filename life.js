(function (){
    const fullform = 'immediately invoked function expression';
    console.log('iife:',fullform);
})();

(function (){
    const thisformat = 'this format is anoymous in react like arrow ()';
    console.log('kk:',thisformat);
})();

(function (msg){
    const thisformat = 'this format is anoymous in react like arrow ()';
    console.log('mm:',msg,thisformat);
})('iife is');

console.log("-----module caching--------");

// const Caching = require('./modulecching');

// const malar = new Caching("malar");
// console.log('f:', malar.getName());
// malar.setName("batman");
// console.log('s:',malar.getName());

// const mani = new Caching("mani");
// console.log('f:',mani.getName());
// mani.setName("batman");
// console.log('s:',mani.getName());
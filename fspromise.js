const fs = require('fs/promises')
// console.log('first');
// fs.readFile('./Files/day.txt','utf-8')
// .then(data => console.log('promise;', data))
// .catch(err => console.log(err))
// console.log('second');

async function readfile(){
    try{
        const data = await fs.readFile('./Files/day.txt','utf-8')
        console.log('promise;', data)
    }
    catch(err){
        console.log(err)
    }
}
readfile();



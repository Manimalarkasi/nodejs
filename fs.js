const fs= require('fs');
console.log('******read file********');
console.log("first");
 console.log("text:", fs.readFileSync('./Files/day.txt','utf-8'));
console.log('second');
 fs.readFile('./Files/day.txt','utf-8',(error,data)=>{
       if(error){
        console.log(error);
       }else{
        console.log('text2:', data);
       }
 });
 console.log("third");

 console.log("***********write file**********");
console.log("first write");

 fs.writeFileSync("./Files/day2.txt","welcome to my world manimalar")
 console.log('second write');
 fs.writeFile("./Files/day2.txt","   welcome to my world manimalarkasi!",{flag:'a'},(err)=>{
     if(err){
        console.log(err);
     }else{
        console.log('file written');
     }
 })
 console.log("third write");


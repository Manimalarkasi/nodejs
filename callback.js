function greet(name) {
    console.log(`welcome to mt world ${name}`);
}
function greetmani(callback){
    let name = "mani";
    callback(name)
}
greetmani(greet)
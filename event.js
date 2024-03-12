// const PizzaShop = require('./eventclass')
const PizzaShop =require ('./eventclass')
const DrinkMachine = require ('./eventclass1')
const pizzaShop = new PizzaShop();
const drinkmachine =new  DrinkMachine();
pizzaShop.on("order",(size,topping)=>{
    console.log(`order received! baking a ${size} pizza ${topping}`);
    drinkmachine.servedrink(size);
});
pizzaShop.order("large","musroom");
pizzaShop.displayordernumber()




// const EventEmitter = require('node:events')

// const emitter = new EventEmitter() //class

// emitter.on("order-pizza",(size,toping)=>{
//     console.log(`order received! baking a ${size} pizza ${toping}`);
// }); //eventlistener

// emitter.on('order-pizza',(size)=>{
//     if(size==="large"){
//         console.log("servimg complementarry drink");
//     }
// })
// console.log("Do you work before event occurs in the system");
// emitter.emit('order-pizza' ,"large","musroom"); //it emit ()            
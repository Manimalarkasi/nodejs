const EnentEmitter = require("events")

class PizzaShop extends EnentEmitter{
    constructor() {
        super();
        this.orderNumber=0
    }
    order(size,topping) {
        this.orderNumber ++;
        this.emit("order",size,topping)
    }
    displayordernumber(){
        console.log(`Currenr order number: ${this.orderNumber}`);
    }
}

module.exports = PizzaShop;



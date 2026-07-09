        // Function type :
function makeChai(type:string, cups:number) {
    console.log(`Making ${cups} cups of ${type}`);
 }
// makeChai("Masala", "2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
makeChai("Masala", 2);

function getChaiPrice():number {
    // return "10 rupees"; // Error: Type 'string' is not assignable to type 'number'.;
    return 10;
}function getChaiPrices() {
    return 10;
}


function makeOder(orderType:string) {
    if (!orderType) return null
    return orderType
    // return `Order received for ${orderType} chai`;
}

function makeOdered(orderType:string):string | null {
    if (!orderType) return null
    return orderType
    // return `Order received for ${orderType} chai`;
}

function logChai():void {
    console.log("Chai is ready");
}
function oderChai(type?:string) {
console.log('Chai order received');

}
function oderChai(type:string = "Masala") {
console.log('Chai order received');
}


function createChai(order:{
    type:string,
    sugarLevel:number;
    size:"small" | "medium" | "large"
}){
console.log();
}

function createChais(order:{
    type:string,
    sugarLevel:number;
    size:"small" | "medium" | "large"
}):number{
return 10;
}
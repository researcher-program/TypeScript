/* 
// getting problem:

class Chai {
    flavour: string;
    price: number
}
*/

/*
const masalaChai = new Chai()
masalaChai.flavour = "masala"
*/

//Solution:
class Chai {
    flavour: string;
    price: number

    constructor(flavour:string,price:number){
        this.flavour = flavour
        this.price = price
    }
}
const masalaChai = new Chai('Ginger',20)
masalaChai.flavour = "masala"

class myChai {
    flavour: string;

    constructor(flavour:string){
        this.flavour = flavour
        console.log(this);
        
    }
}

class Mychai {

     public flavour:string = "Masala"
     private secretIngredients = "Caedamon"
     reveal(){
        return this.secretIngredients // ok
      }
}
      class Shop{
      protected shopName = "Chai Corner"
      }
      class branch extends Shop{
        getName(){
            return this.shopName // ok
        }
      }

// const c = new Mychai()
// c.reveal

// new branch().getName

class Walet {
    #balance = 100
    getBalance (){
        return this.#balance
    }
}
const w = new Walet()
w.getBalance

class Cup {
    readonly capacity:number = 250
    constructor(capacity:number){
        this.capacity = capacity
    }
}

class ModernChai {
    private _sugar = 2
    get sugar(){
        return this._sugar
    }
    set sugar(value:number){
        if(value > 5)throw new Error ("Too Sweet...!Please Don't too much sweet ")
            this._sugar = value
    }
}
const c = new ModernChai()
c.sugar = 3


class EkCupChai {
    static shopName = "Chai-code Caffeey"
    constructor(public flavour:string){}
}
console.log(EkCupChai.shopName);



abstract class Drink {
    abstract make():void
}
class Mychai extends Drink{
    make(){
        console.log("Brewing Chai");
        
    }
}


//Composition: instead  inheritance
class Heater{
    heat(){}
}
class ChaiMaker{
    constructor(private heater : Heater){}
    make(){
        this.heater.heat
    }
}
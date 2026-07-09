interface Chai {
    flavour: string
    price: number
    milk?:boolean
}
const masalaChai:Chai = {
    flavour:"masala",
    price:30,
};
 interface Shop {
    readonly id: number
    name: string
 }
 const s:Shop = {id:1,name:"chaiCode Caffeey"}
//  s.id = 2

interface DiscountCalculator {
    (price:number):number
}
const apply50:DiscountCalculator = (p) => p*0.5


interface TeaMachine{
    start():void
    // start(price:number):void
    stop():void
}

const machine : TeaMachine = {
    start() {
        console.log("Start");
        
    },
    stop() {
        console.log("Stop");
        
    },
}


interface ChaiRatings{
    [flavour:string]:number
}
const ratings:ChaiRatings = {
    masala:4.5,
    // masala:"4.5"
    ginger:3.5
}

interface User {
    name:string
    
}

interface User {
    
    age :number
}

const u:User = {
    name:"Arafat",
    age:25
}

interface A{a:string}
interface B{b:string}
interface C extends A , B {}


//Generics :
function wrapInArray<T>(item:T):T[]{
    return [item]
}
wrapInArray("masala")
wrapInArray(25)
wrapInArray({flavour:"Ginger"})

function pair<A,B>(a:A,b:B):[A,B] {
    return [a,b]
    // return [b,a]
    // return [A,B]   
}
pair("masala","test")
pair("masala",20)
pair("masala",{
    flavour:"Ginger"
})

interface  Box<T> {
    content : T
}
const numberBox: Box<number> = {content:10}
const numberBoxCup: Box<string> = {content:"10"}


interface ApiPromise<T>{
    status:number,
    data:T
}
const res:ApiPromise<{flavour:string}> ={
    status:20,
    data:{flavour:"Masala"}
}

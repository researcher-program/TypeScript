// Array:
const chaiFlavours:string[] = ['Masala',"Adrak"]
const chaiPrice:number[] = [10,20]
const rating: Array<number> = [4.5,5.0]
type Chai = {
    name:string,
    price:number
} 
const menu:Chai[]=[
    {name:"Masala",price:15},
    {name:"Adrak",price:20}
]


const cities:readonly string[] = ["Dhaka",'Borishal']
// cities.push("Cumilla") // "Error " Given!

const table:number [][] = [
    // [1,2,3],[4,5,6]
    [1,2,3],
    [4,5,6] //Same!!!
]


// Tuple:
let chaiTuple:[string,number];
chaiTuple = ["Masala",20]
// chaiTuple = [25,"Adrak"] //Given " Error!!!"

let userInfo: [string,number,boolean?]
userInfo = ["Arafat",100]
userInfo = ["Arfan",200,true]

const locations: readonly [number,number] = [22.5,65.5]
const chaiItems:[name:string,price:number] = ["Masala",20]

// Enums:

enum CupSize {
    // SMALL,MEDIUM,LARGE
    SMALL,
    MEDIUM,
    LARGE
}
// const size = CupSize.LARGE
// const size = CupSize.MEDIUM
const size = CupSize.SMALL

enum Status {
    PENDING = 100,
    SERVED, //101
    CANCELLED, //102
}
enum ChaiType {
    MASALA = 'masala',
    GINGER = "ginger"
}
function makeChai(type:ChaiType) {
    console.log(`Making: ${type}`);
}
// makeChai(ChaiType.GINGER)
makeChai(ChaiType.MASALA)

//Bad practices: // Please same types (dataTypes)
enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

const enum Sugers {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}
// const s = Sugers.HIGH
// const s = Sugers.MEDIUM
const s = Sugers.LOW

// Unexpected behaviour :because of "enum" means "Array":
let t: [string,number] = ["chai",10]
t.push("extra") // Getting problem when it "Debugs".
let a: number = 5;
let b: number = 10;
let c: number = a + b;
console.log(c);

         // Object
let person: { name: string; age: number } = {
    name: "Alice",
    age: 30
};
console.log(person.name, person.age);

const chai = {
    name: "Masala Chai",
    price: 20,
    isHost: 2
}
/*
{
    name: string;
    price: number;  
    isHost: boolean;

}
*/
// Declaring Object Type
let ChaiType: {
    name: string;
    price: number;  
    isHost: boolean;
}
ChaiType = {
    name: "Ginger Chai",
    price: 25,
    isHost: true
}
type ChaiTypeAlias = {
    name: string;
    price: number;
    ingredients: string[];
}
let ChaiType2: ChaiTypeAlias = {  
    name: "Cardamom Chai",
    price: 30,
    ingredients: ["Cardamom", "Tea Leaves", "Milk", "Sugar"]
}
console.log(ChaiType2);

type Cup ={
    size: string;
}
let myCup: Cup = {
    size: "Medium"
}
console.log(myCup);
let bigCup = {
    size: "200ml",
    material: "Ceramic"
} as Cup;
myCup = bigCup;
console.log(bigCup);


type Brew = {brewTime: number;}
const coffee = {brewTime: 5,temperature: 90,beans: "Arabica"} 
const chaiBrew: Brew = coffee;
console.log(chaiBrew);
console.log(ChaiType);
console.log(chai);
/*
console.log(a);
console.log(b);
console.log(c);
*/

type User = {
    username: string;
    email: string;
    password: string;
}
let user1: User = {
    username: "john_doe",
    email: "john@example.com",
    // password: "secure123"
    password: "secure123"
};
console.log(user1);
let user2: User = {
    username: "jane_smith",
    email: "jane@example.com",
    password: "secure456"
};
console.log(user2);


type Item = { name:string;quantity:number;}
type Address = { street:string;city:string;pincode:number;}
type Order = { id: string;
     item: Item[]; 
    address: Address; }

type Chai = { name: string; price: number; isHost: boolean; }
/*
const updatedChai = (updates: Partial<Chai>): Chai => {
    return {
        name: "Regular Chai",
        price: 15,
        isHost: false,
        ...updates
    };
}
*/
const updatedChai = (updates: Partial<Chai>) => {
    console.log("updating chai with ",updates);
}
updatedChai({price:18});
updatedChai({isHost:true});
updatedChai({});

type ChaiOrder = {
    name?: string;
    quantity?: number;
}
const placeChaiOrder = (order: Required<ChaiOrder>) => {
console.log(order);
}
placeChaiOrder({name:"Masala Chai",quantity:2});

type ChaiInfo = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}
type ChaiNameAndPrice = Pick<ChaiInfo, "name" | "price">;
const chaiDetails: ChaiNameAndPrice = {
    name: "Ginger Chai",
    price: 25
};
console.log(chaiDetails);



type ReadonlyChai = Readonly<Chai>;
const myChai: ReadonlyChai = {
    name: "Lemon Chai",
    price: 22,
    isHost: false
};
// myChai.price = 25; // Error: Cannot assign to 'price' because it is a read-only property
console.log(myChai);

type ChaiName = Pick<Chai, "name" | "isHost">;
const chaiNameDetails: ChaiName = {
    name: "Tulsi Chai",
    isHost: true
};
console.log(chaiNameDetails);

type ChaiNewRecipe = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string[];
}
type ChaiWithoutSecret = Omit<ChaiNewRecipe, "secretIngredients">;
const chaiRecipe: ChaiWithoutSecret = {
    name: "Herbal Chai",
    price: 30,
    isHot: true,
    secretIngredients: ["Herbs", "Tea Leaves", "Milk", "Sugar"]
};
console.log(chaiRecipe);




type ChaiPrice = Omit<Chai, "isHost">;
const chaiPriceDetails: ChaiPrice = {
    name: "Elaichi Chai",
    price: 28
};
console.log(chaiPriceDetails);



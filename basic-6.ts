
/*
function makeChai(order:{type: string; sugar: number; strong: boolean}) {
    // console.log(`Making ${order.type} chai with ${order.sugar} teaspoons of sugar and ${order.strong ? 'strong' : 'weak'} strength.`);
    console.log(order);
    
    
}

function serveChai(order:{type: string; sugar: number; strong: boolean}) {
    // console.log(`Serving ${order.type} chai with ${order.sugar} teaspoons of sugar and ${order.strong ? 'strong' : 'weak'} strength.`);
    console.log(order);
}

*/

type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function makeChai(order: ChaiOrder) {
    console.log(order);
}
function serveChai(order: ChaiOrder) {
    console.log(order);
}   
makeChai({ type: 'Masala', sugar: 2, strong: true });
serveChai({ type: 'Ginger', sugar: 1, strong: false });
type TeaReacipe = {
    water: number;
    milk: number;

}
class MasalaTea implements TeaReacipe {
    water = 200;
    milk = 100;
    }
/*
     //  Problem :
     type CupSize = 'small' | 'medium' | 'large';
     class chai implements CupSize{

     }
*/
 // Solve:

 interface TeaReacipes {
    water: number;
    milk: number;

}
class MasalaChai implements TeaReacipes {
    water = 200;
    milk = 100;
    }
interface CupSize {
    size: 'small' | 'medium' = "medium" | 'large' = 'large';
}/*
     class chai implements CupSize{

     }  */

/*
     type response = {ok:true} | {ok:false, error:string};
     class myResponse implements response { ok : boolean = true; error!: string; }

*/

     interface response = {ok:true} | {ok:false, error:string};
     class myResponse implements response { ok : boolean = true; error!: string; }

type TeaType = 'Black' | 'Green' | 'Herbal';  // letaral types
function brewTea(t: TeaType) {
    console.log(`Brewing a cup of ${t} tea.`);
}

type BaseChai = {
    teaLeaves: number;
}
type ExtraIngredients = {
    masala:number;
}
type MasalaChaiRecipe = BaseChai & ExtraIngredients;
const myMasalaChai: MasalaChaiRecipe = {
    teaLeaves: 5,
    masala: 3
};
console.log(myMasalaChai);
/*
type TeaReacipe = {
    teaType: string;
    milk: boolean;
    sugar: number;
    spices?: string[];
};
function prepareTea(recipe: TeaReacipe) {
    console.log(recipe);
}
prepareTea({ teaType: 'Green', milk: false, sugar: 1 });
*/


/*
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};
function introduce(person: Person) {
    console.log(`Hello, my name is ${person.name}. I am ${person.age} years old and I am ${person.isStudent ? 'a student' : 'not a student'}.`);
}
introduce({ name: 'Alice', age: 23, isStudent: true });
introduce({ name: 'Bob', age: 30, isStudent: false });
*/

type User = {
    username: string;
    email: string;
    bio?: string;
};
const user1: User = {
    username: 'john_doe',
    email: 'john@example.com',
    bio: 'A passionate tea enthusiast.'
};
const user2: User = {
    username: 'jane_smith',
    email: 'jane@example.com',
    bio: undefined
};
type Config = {
    readonly appName: string;
    version: number;
};
const cfg: Config = {
    appName: 'MyApp',
    version: 1.0
};
cfg.appName = 'YourApp'; // Error: Cannot assign to 'appName' because it is a read-only property.

cfg.version = 1.1; // Allowed
// cfg.appName = 'NewApp'; // Error: Cannot assign to 'appName' because it is a read-only property.
console.log(cfg);

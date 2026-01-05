        //  Type " Assertion ,Unknown and Never " :

let response : any = "42";
// let numericLength : number = response.length /* here not shows "suggestions"because of "writting this Forcefully." That's why : */
let numericLength : number = (response as string).length

type book ={
    name: string
}
let bookString = '{"name":"Who Moved My Cheese"}'
// let bookObject = JSON.parse(bookString)
// console.log(bookObject.);
let bookObject = JSON.parse(bookString) as book
// console.log(bookObject.name);
console.log(bookObject);


const inputElement = document.getElementById("username") as HTMLInputElement
// Number("42") //Please Please don't do this in TS. 


let value :any
value = "chai"
value = [1,2,3]
value = 2.5
value.toUpperCase()
let newValue :unknown
newValue = "chai"
newValue = [1,2,3]
newValue = 2.5
// newValue.toUpperCase()
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
/*
try {
    
} catch (error) {
    
}
*/
/*
try {
    
} catch (error:any) {
    console.log(error.message);
    
}
*/

try {
    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error",error);
    
}

const data:unknown = " Chai pe jay"
const strData:string = data as string

type Role = "admin" | "user" | "superadmin"
function redirectBasedOnRole(role:Role):void {
    if (role === "admin ") {
        console.log( "Redirecting to admin dashboard");
        return
        
    }
    if (role === " user ") {
        console.log( "Redirecting to user dashboard");
        return
    }
    role;
}

function neverReturn() : never{
    while (true) {
        
    }
}
// Type Narrowing and Type Guards :

        // Type Narrowing:
function getChai(kind:string | number) {
    if (typeof kind === 'string') {
      return  `Making ${kind} Chai ...`; // ${kind.} 
    }
    return `Chai Oder : ${kind}`; // ${kind.} 
    // This ${kind} is different between their "dots{.}"
}

function serveChai(msg?: string) {
    if (msg) {
        return `Serving ${msg} `;
    }
    // return ` Serving Default Masala Chai ${msg}`;
    return ` Serving Default Masala Chai `;
}
function OderChai(size:"small" |'medium' | "large" | number) {
    if (size === 'small' ) {
        return `small cutting chai...` 
    }
    if (size ===  "medium" ) {
        return  `Not enough ,making extra ...`
    }
    if (size ===  'large' ) {
        return ` making double extra ...`
    }
    return `chai order size :- ${size}`
}

class KulhadChai {
    serve() {
        return ` Serving Kulhad Chai ...`
    }
}
class cuttingChai {
    serve() {
        return ` Serving cutting Chai ...`
    }
}
function serve(chai:KulhadChai | cuttingChai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
    /*
    if (chai instanceof cuttingChai) {
        return chai.serve();
    }
    */
}
type ChaiOrder = {
    type: string
    sugar: number
}
function isChaiOder(obj:any):obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null  &&
        typeof obj.type === "string" &&
        typeof obj.type === "number"
        
    )
}
function serveOder(item:ChaiOrder | string) {
    if (isChaiOder(item)) {
        return ` Serving ${item.type} chai with ${item.sugar}`
    }
    return ` Serving custom chai:   ${item}`
}
type MasalaChai = {type:"masala";spicelevel:number};
type GingerChai = {type:"ginger";amount:number};
type ElaichiChai = {type:"elaichi";aroma:number};

type chai = MasalaChai | GingerChai | ElaichiChai
function MakeChai(oder:chai) {
    switch (oder.type) {
    case "masala":
        return `Masala Chai`
        break;
case "ginger":
        return `Ginger Chai`
        break;
case "elaichi":
        return `Elaichi Chai`
        break;

    default:
        break;
}
}
function brew(order:MasalaChai | GingerChai | ElaichiChai) {
    if ("spicelevel" in order) {
        
    }
    if ("amount" in order) {
        
    }
    if ("aroma" in order) {
        
    }
}
/*
function isStringArray(arr:any) : arr is string[]
Or,
*/
function isStringArray(arr:unknown) : arr is string[] // Same
{
   return (
    Array.isArray(arr) && arr.every(element => typeof element === "number")
  ); 
}

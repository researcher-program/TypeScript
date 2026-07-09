function greet(name: string):string {
    return `hello ${name}`
}
    console.log(greet("Aafat"));
    console.log(greet(true));
    console.log(greet(42));   


/*
1. When to learn TS ? =>When Over in JS,that means you well-know about JS.
2. What is TS ?=> TS is giving superPower in JS,That means,JS Types,means DataTypes... 

Some Issues :
i.Freedom 
ii.Loose-->JSDocs
iii.Developer Tooling
iv. AI

TS Pros:i.Addon,ii.No running tool,or not run it,it can need process to give output :JS,like: TS --> Process --> JS
iii.features:type Checker {Consistency}
*/

/*
Link To Study For TS
=> https://github.com/microsoft/TypeScript

*/
/*

Diagram: How TypeScript Works:Behind The Scenes:-

[1. TS Code] 
--> [2. lexer  (Getting code-->Tokenized)] 
--> [3. Parser {AST ( Abstruct Syntax Tree ) / CST ( Concrete Syntax Tree ) } ]
--> [4. Binder {i. Symbol Tables ; ii. Parent Pointer ; iii. Flow Nodes } ]
--> [5. Checker {i. Structure Checking ; ii. Special Checking } , { Syntax Checking ( Short Circuit ) } ]
--> [6. Generator / Emmiter ] 
--> [7.  .js ; .d.ts ; .map ].

AST Explorer : https://astexplorer.net/
*/
/*
TypeScript Installation Process:[1.Globally] [2.Projects]
*/

/*
Study For TypeScript:
https://aka.ms/tsconfig
*/

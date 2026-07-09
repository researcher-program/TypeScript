// TS =>[1).d.ts ; 2)hints/errors]

// npm i some-library
// npm i -D @types/some-library
import axios from "axios";
// import axios,{AxoisResponse} from "axios";
import type {AxoisResponse} from "axios";
/*
{
    'userId': 1,
    "id": 1,
    'title':"delectus aut autem",
    "completed":false,
}
*/
interface Todo{
    'userId': number,
    "id": number,
    'title': string,
    "completed": boolean,
}

// const fetchData = async (todo:Todo)
// const fetchData = async (url:string)
const fetchData = async () =>{
    try {
        const response:AxoisResponse<Todo> = await axios.get(
            'https://jsonplaceholder.typicode.com/todos/1'
        );
        console.log("Todo",response.data);
        
        
    } catch (error:any) {
        if(axios.isAxiosError(error)){
            console.log("Axois Error",error.message);
            if(error.response){
                console.log(error.response.status);
                
            }
        }
    }
};


/*
axios.get('https://example.com/data')
.then(response => {
    console.log(response.data);
    
})
*/


// Doing Same Code with "fetch"
import axios from "axios";
// import axios,{AxoisResponse} from "axios";
import type {AxoisResponse} from "axios";

interface Todo{
    'userId': number,
    "id": number,
    'title': string,
    "completed": boolean,
}

const fetchdata = async () =>{
    try {
        const response:AxoisResponse<Todo> = await fetch(
            'https://jsonplaceholder.typicode.com/todos/1'
        );
        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`);
        }
        const data :Todo = await response.json()
        
    } catch (error:any) {
       
    }
};


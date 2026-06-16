//function declaration
function greet(){               
    console.log("Good Morning");
}

console.log("Hi");
console.log("How are you");
greet();   //function calling


//function with parameters
function add(a,b){    
    return a+b;
}
//1st way
console.log(add(5,6));
//2nd way
let result = add(5,6);
console.log(result);


function isEven(num){
    if(num%2 === 0){
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}

isEven(6);


function sqr(num){
    console.log(num*num);
}

sqr(6);

//ARROW FUNCTIONS
const addition = (a,b) => { console.log(a+b); }

addition(8,4);

const welcome = () => { console.log("Welcome to our website");}

welcome();

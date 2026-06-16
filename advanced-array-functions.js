let numbers = [20,5,4,12,14];

//map
let sqr = numbers.map((num) => num*num*num);
console.log(sqr);

//filter
let even = numbers.filter((num) => num % 2 === 0);
console.log(even);

let persons = [
    {
        id:1,
        name:"John",
        class:5,
        age:15
    },
    {
        id:2,
        name:"Jia",
        class:7,
        age:20
    },
    {
        id:3,
        name:"Sam",
        class:10,
        age:32
    }
]

let new_array = persons.filter((i) => i.age > 18);
console.log(new_array);

//find
let array = persons.find((i) => i.id == 3);
console.log(array);

//to give a portion(doesn't modify original array)
let elements = [2,61,23,0,78,54];  
console.log(elements.slice(1,4));

//to delete elements(modifies original array)
elements.splice(2,3);  
console.log(elements);

let arr = [2, 5, 50, "A", 62, true];

//accessing an element
console.log(arr[2]);

//updating an element
arr[4] = 65;
console.log(arr[4]);

//adding an element
arr.push(26);
console.log(arr[6]);

arr.unshift(32);
console.log(arr[0]);

//delete
arr.pop(); //to delete from end
arr.shift(); //to delete from starting

console.log(arr);

//traverse or print
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((i) => {
  console.log(i);
});

//to check if the array contains a particular element
console.log(arr.includes(9));

//to check the index of an element
console.log(arr.indexOf("A"));

function printElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

let students = ["John", "Sia", "Sid"];

printElements(students);

printElements(arr);



let numbers = [2,8,6,1,5,12,30,59,23];

function printEven(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log("Even numbers are" , array[i]);
    }
  }
}

printEven(numbers);

function searchElements(arr, ele){
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      console.log("Element found at index ", i);
    }
  }
}

let myarray = [2,1,3,1,7,18];

searchElements(myarray, 1);
searchElements(numbers,8);


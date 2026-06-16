let age = 15;

if (age > 18){
    console.log("can vote");
}
else {
    console.log("cannot vote");
}


let num = -5;
if (num > 0){
    console.log('positive');
}
else {
    console.log('negative');
}


let marks = 10;

if(marks >= 90){
    console.log("grade A");
}
else if(marks >=75 && marks < 90) {
    console.log("grade A");
}
else if(marks >=35 && marks < 75) {
    console.log("grade B");
}
else {
    console.log("fail");
};


let x = 10;
if(x % 2 === 0){
    console.log('even')
}
else{
    console.log('odd');
}

console.log(x%2 ===0 ? 'even' : 'odd');



let day = 2;

switch (day){
    case 1: console.log('Monday');
            break;
    case 2: console.log('Tuesday');
            break;
}


let amount = 20000;
let discount;

switch(true){
    case amount >= 18000:
        discount = amount * 0.50;
        break;

    case amount >=10000 && amount < 18000:
        discount = amount * 0.20;
        break;
    default : discount = 0;
}

console.log("hi");
console.log("Discount is: " , discount);

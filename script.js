//  1) Comparison Operators
//  i)
var firstNum = 10;
var secondNum = 15;

if(firstNum == secondNum){
    console.log(firstNum + " is equal to " + secondNum + ".");
}
else{
    console.log(firstNum + " is not equal to " + secondNum + ".");
}

//  ii) 
var age = 18;

if(age >= 18){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}


//  2) If-Else & Nested Conditions
//  i)
var marks = prompt("Enter your marks");

if(marks >= 80 && marks <= 100){
    console.log("A");
}
else if(marks <= 79 && marks >= 60){
    console.log("B");
}
else if(marks <= 59 && marks >= 40){
    console.log("C");
}
else if(marks < 40){
    console.log("Fail");
}
else {
    console.log("Please enter correct marks");
}

//  ii)
var scores = prompt("Enter your score")
if(scores > 90){
    console.log("Excellent");
}
else if(scores > 70 && scores < 90){
    console.log("Good");
}
else if(scores < 70){
    console.log("Needs Improvement");
}
else {
    console.log("Please enter correct score");
}


//  3) Arrays
var fruits = ["banana", "mango", "orange", "apple", "pineapple"];
console.log(fruits[0],fruits[4]);


//  4) Adding, Removing, Inserting, Extracting Elements
//  i)
var house = ["room", "kitchen", "guest room", "washroom"];
house.splice(2, 0, "washing area");
console.log(house); 

// ii)
var numbers = [1,2,3,4,5,6];
numbers.pop();
// altered array
console.log(numbers);

//  iii)
var letters = ["b", "c", "d", "e"];
letters.unshift("a");
console.log(letters);

//  iv)
var classGoods = ["desk", "black board", "white board", "students", "teachers"];
classGoods.shift();
console.log(classGoods);

//  v)
var bag = ["books", "copies", "pencil", "pen", "erasor"];
bag.splice(3,0,"inquiter");
console.log(bag);

//  vi)
var firstArray = ["pc", "mouse", "desktop", "laptop"];
var secondArray = firstArray.slice(2,3);
console.log(firstArray, secondArray);


//  5) For Loops
//  i)
console.log("Inverse Table of 5")
for(i = 5; i <= 5; i++){
    for(j = 10; j >= 1; j--){
        console.log(i + " x " + j + " = " + i*j)
    }
}

//  ii)
var products = ["iron", "door", "drum", "basket", "window"];
isFound = false;
var toFind = prompt("Enter the product")
for(i = 0; i < products.length; i++){
    if(products[i] === toFind){
        console.log("Yeah! It is available.");
        isFound = true;
    }
}
if(isFound === false){
    console.log("It is not available.");
}

//  iii)
var nums = [1,2,3,4,5,6,7,8,9,10];
for(i = 0; i < nums.length; i++){
    if(nums[i] === 5){
        console.log(nums[i])
        break
    }
    console.log(nums[i])
}
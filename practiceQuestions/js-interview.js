//what will be the outpu?

function abc() {
  console.log(this);
}
abc();

//flatten an array using for of

let arr = [
  [1, 2],
  [3, 4, 5, [6, 7]],
];

let flattenedArray = [];
const toFlatten = (params) => {
  for (let element of params) {
    if (Array.isArray(element)) {
        toFlatten(element)
    } else {
      flattenedArray.push(element)
    }
  }
  return flattenedArray;
};

console.log(toFlatten(arr));


//write a function in javascript which remove duplicates from array
//Method 1

let arr1 = [1,2,3,4,5,5,6,2,7,3];

let arr1Result = () => {
  return [...new Set(arr1)] 
}
console.log(arr1Result());

//Method 2

let arr2Result = () => {
  return arr1.filter(function(item, pos){
    return arr1.indexOf(item) == pos;
  })
}
console.log(arr2Result());

// Fibonacci Series

// let number = parseInt(prompt("enter number"));
let n1=0, n2=1, next;

let printFb = () => {
  for (let i=0; i< number; i++){
    console.log(n1);

    next = n1 + n2;
    n1 = n2;
    n2 = next;
  }
}

// printFb();

// Reverse a string

var str = "Reverse me";

//Method 1

let splitstr = str.split("");
let revsplit = splitstr.reverse();
let revStr = revsplit.join("");

console.log("Reversed string", revStr);

// Method 2

function getRev (str) {
  let revStr1 = "";
  for (let j = str.length - 1; j >= 0; j--){
    revStr1+= str[j];
  }
  return revStr1;
}

console.log(getRev("Reverse me again"));

// Get count for duplicate numbers in an array

let arr3 = ['one', 'two', 'three', 'one', 'one', 'two', 'five'];

let count = [];

arr3.forEach(element => {
  count[element] = (count[element] || 0) + 1;
})
console.log(count)

// given an array [1,2,3,4,5,6,7,8,9,10,11,12,13,14] create a function which take the paramter as array 
//and a size and the seperate the array in chunks with the given size.

function createChunk(arr, size){
  let miniArr = [];
  let result = [];
  for(i= 0; i<arr.length ; i++){
    miniArr.push(i);
    if(miniArr.length === size || i === arr.length - 1){
      result.push(miniArr);
      miniArr = [];
    }
  }
  console.log(result);
}
createChunk([1,2,3,4,5,6,7,8,9,10,11,12,13,14], 3);

// check if palindrome
(function palindrome(){
  let number = 1223221;
  const result = checkPalindrome(number);
})()
function checkPalindrome(num){
  let initialNum = num;
  let checkNum = 0;
  while(num > 0){
    const digit = num % 10;
    checkNum = checkNum * 10 + digit;
    num = Math.floor(num/10);
  }
}
// new
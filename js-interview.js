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

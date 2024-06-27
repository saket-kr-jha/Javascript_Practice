//async code
// console.log("hello");
// function importantAction(username, cb){
//     setTimeout(()=>{
//         cb(`Subscribe to ${username}`);
//     },0)
// }

// const message = importantAction("Saket", (message)=>{console.log(message)})
// console.log("Last console")

// promises

// console.log("hello");
// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = false;
//     if (result) resolve("Hello from promise");
//     else reject(new Error("Error from set timeout"));
//   }, 2000);
// });

// console.log(sub);

// sub.then((res) => {
//     console.log("Resolved");
//   })
//   .catch((err) => {
//     console.log("Error");
//   });
// console.log("Last console");

// promise chaining

console.log("hello");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hi my name is ${username}`);
    }, 1000);
  });
}

function likeIt(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I Like ${name}`);
    }, 1000);
  });
}

function desc(desg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`My desc is ${desg}`);
    }, 1000);
  });
}

importantAction("Saket")
  .then((res) => {
    console.log(res);
    return likeIt("Mango");
  })
  .then((res) => {
    console.log(res);
    return desc("student");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Error");
  });

  console.log("LAst")
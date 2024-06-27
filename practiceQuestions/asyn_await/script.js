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

// console.log("hello");

// function importantAction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Hi my name is ${username}`);
//     }, 1000);
//   });
// }

// function likeIt(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`I Like ${name}`);
//     }, 1000);
//   });
// }

// function desc(desg) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`My desc is ${desg}`);
//     }, 1000);
//   });
// }

// importantAction("Saket")
//   .then((res) => {
//     console.log(res);
//     return likeIt("Mango");
//   })
//   .then((res) => {
//     console.log(res);
//     return desc("student");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("Error");
//   });

//   console.log("LAst")

//using prmise.all

// Promise.all([importantAction("Saket"), likeIt("Mango"), desc("student")]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("Error", err)
// })

// promise.race - return the first promise which gets fulfilled or rejected

// Promise.race([importantAction("Saket"), likeIt("Mango"), desc("student")]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("Error", err)
// })

// promise.allsettled - return the failed as well as fulfilled promises

// Promise.allSettled([importantAction("Saket"), likeIt("Mango"), desc("student")]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("Error", err)
// })

// promise.any - return the first fullfilled promise and ignore the failed once - returns error when all the prmise fails

// Promise.allSettled([importantAction("Saket"), likeIt("Mango"), desc("student")]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("Error", err)
// })

// console.log("Last");

// Interview question 1
// const firstPromise =  new Promise((resolve, reject)=>{
//     resolve("First!");
// });

// const secondPromise =  new Promise((resolve, reject)=>{
//     resolve(firstPromise);
// });

// secondPromise.then((res)=>{
//     console.log(res)
//     return res;
// }).then((res)=>{
//     console.log(res);
// })

// call promises recursively using a function :

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

function promRecurse(funcPromises) {
  if (funcPromises.length === 0) return;
  const currentProm = funcPromises.shift();

  currentProm
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  promRecurse(funcPromises);
}

promRecurse([importantAction("Saket"), likeIt("Mango"), desc("student")]);

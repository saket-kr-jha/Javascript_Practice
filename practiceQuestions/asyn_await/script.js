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

console.log("hello");
const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = false;
    if (result) resolve("Hello from promise");
    else reject(new Error("Error from set timeout"));
  }, 2000);
});

console.log(sub);

sub.then((res) => {
    console.log("Resolved");
  })
  .catch((err) => {
    console.log("Error");
  });
console.log("Last console");

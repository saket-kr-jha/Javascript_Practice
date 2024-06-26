//async code
console.log("hello");
function importantAction(username, cb){
    setTimeout(()=>{
        cb(`Subscribe to ${username}`);
    },0)
}

const message = importantAction("Saket", (message)=>{console.log(message)})


console.log("Last console")
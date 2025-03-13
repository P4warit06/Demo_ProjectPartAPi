//asynchronouse program
console.log("starting...");
// Set timeout is an asyncchronous function
let isDone = false;
setTimeout(() => (isDone = true), 5000); //Set delay timeout
console.log(`isDone = ${isDone}`); //consequence

console.log("ending...");
async function doSomething() {
  let flag = 0;
  return new Promise((resolve, reject) => {
    setTimeout(() =>
      flag === 0 ? reject("your job fail") : resolve("your job success!"),5000
    )
  })
}
console.log("staring...");
// // 1. then().catch()
// // log(doSomething())
// doSomething()
//   .then((status) => {
//     //resolve
//     console.log(status)
//     console.log('processing...')
//     console.log('ending...')
//   })
//   .catch((error) => {
//     //reject 
//     console.log(`Error:${error}`);
//   });

// console.log("staring...");
// 2. async + await try catch
async function test(){ 
    try{
        const status = await doSomething()
        console.log(status);
        console.log('processing...')
        console.log('ending...')
    }
    catch(error){
        console.log(`Error : ${error}`);
    }
}
test()

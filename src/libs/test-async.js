//asynchronous program
// console.log('starting...')
// // setTimeout is an asynchronous function
// let isDone = false
// setTimeout(() => (isDone = true), 5000)
// console.log(`isDone = ${isDone}`)
// console.log('ending...')

async function doSomething() {
  let flag = 0;
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        flag === 1 ? reject("your job fail!") : resolve("your job success!"),
      5000
    );
  });
}
console.log("starting...");
//1. .then().catch()
// console.log(doSomething())
// doSomething()
//   .then((status) => {
//     //resolve
//     console.log(status)
//     console.log('processing...')
//     console.log('ending...')
//   })
//   .catch((error) => {
//     //reject
//     console.log(`Error: ${error}`)
//   })
//2. async + await + try...catch
async function test() {
  try {
    const status = await doSomething();
    console.log(status);
    console.log("processing...");
    console.log("ending...");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
test();

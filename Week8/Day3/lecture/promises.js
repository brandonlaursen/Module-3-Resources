/*


  Promises
  * A Promise in JavaScript is a commitment that sometime in the future, your code will get a value from some operation (like reading a file or getting JSON from a Web site) or your code will get an error from that operation (like the file doesn't exist or the Web site is down).

  MDN
  * A Promise is an object representing the eventual completion or failure of an asynchronous operation.


  Promises can exist in one of three states:
    * pending: The promise has been neither fulfilled nor rejected.
    * fulfilled: The promise's action has succeeded.
    * rejected: The promise's action has failed.

  A promise is considered settled when it has either been fulfilled or rejected.

  Due note!
  * A promise can only succeed or fail once
  * A promise cannot change its state from fulfilled to rejected or vice-versa.
  * If a promise has already been settled and a callback is added that matches the promise's state, that callback will be invoked immediately.

*/

// ! Promises are useful for when handling async code

// Promise
// * takes in a single executor function as an argument -> callback function () => {}
// * executor function take two optional parameters
// *  resolved
// *  rejected

const pendingPromise = new Promise((resolve, reject) => {
  // console.log(resolve, reject); // [Function (anonymous)] [Function (anonymous)]
});

// console.log(pendingPromise);// Promise { <pending> } <-- A promise Object

function function1() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      let number = "asdfasdf";

      if (!isNaN(number)) {
        resolve(number);
      } else {
        rejected(number);
      }
    }, 2000);

    // then .then takes in two arguments
    // * the first is a function to handle a resolved promise
    // * the second is a function to handle a rejected promise
    // * the value passed to the resolve function will be represented by the parameter in the callback function
  })
    .then((value) => console.log("resolved", 10 + value))
    .catch((value) => console.log(`reason:`, `${value} is not a number`));
}

// function1();

function function2() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      let number = 12;

      if (!isNaN(number)) {
        resolve(number);
      } else {
        rejected(number);
      }
    }, 2000);

    // then .then takes in two arguments
    // * the first is a function to handle a resolved promise
    // * the second is a function to handle a rejected promise
    // * the value passed to the resolve function will be represented by the parameter in the callback function
  })
    .then((value) => {
      console.log("resolved", 10 + value);
      return value;
    })
    .catch((value) => console.log(`reason:`, `${value} is not a number`));
}

const fetch = require("node-fetch");

function function3(value) {
  // console.log("===>", value);
  return new Promise((res, rej) => {
    const jokes = fetch(`https://official-joke-api.appspot.com/jokes/random`);

    if (jokes) {
      res(jokes);
    }
  })
    .then((data) => data.json())
    .then((data) => console.log(data));
  // .catch((e) => console.log("ERROR", e));
}

// function3();

function chainPromises() {
  // function1()
  //   .then(() => function2())
  //   .then((value) => function3(value))
  //   .then(() => console.log("done with promise chain"))
  //   .catch((e) => console.log('===>',e));

  Promise.all([function1(), function2(), function3()])
    .then(() => console.log("done with promise chain"))
    .catch((e) => console.log(e))
}

chainPromises();

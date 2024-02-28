


/*
 ! Make fetch requests in the browser for each of the following tasks.
 can also do in browser
 const fetch = require("node-fetch");

Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

//!!START
// using Promise chain (.then)
fetch("/products")
  .then(res => console.log(res.status));

// using async/await
(async function() {
  const res = await fetch("/products");
  console.log(res.status);
})();
//!!END



// * SIMPLEST WAY
const response =  await fetch('/products')


/* ====== 2. Print true if the status of the response was successful ====== */

//!!START
// using Promise chain (.then)
fetch("/products")
  .then(res => console.log(res.ok));

// using async/await
(async function() {
  const res = await fetch("/products");
  console.log(res.ok);
})();
//!!END


// * SIMPLEST WAY
// if(response.status === 200) console.log(true)
if(response.ok) console.log(response.ok)

/* =================== 3. Print the Content-Type Header =================== */
//!!START
// using Promise chain (.then)
fetch("/products")
  .then(res => console.log(res.headers.get('Content-Type')));

// using async/await
(async function() {
  const res = await fetch("/products");
  res.headers.get('Content-Type');
})();
//!!END


// * SIMPLEST WAY
console.log(response.headers.get('Content-Type'))


/* ============== 4. Print the body of the response as text =============== */


// console.log(response.text())



// below is the more practical format on how we would be using fetch
// this practice was mainly to show us how to retrieve data from our response object

// we only await 3 things when making our requests

/*
1. const res = await fetch('/someURL')
2. const body = await res.text()
or
3. const body = await res.json() <--- we will see this later when working with web apis.

*/

//!!START
// using Promise chain (.then)
fetch("/products")
  .then(res => res.text())
  .then(resBody => console.log(resBody));

// using async/await
(async function() {
  const res = await fetch("/products");
  const resBody = await res.text();
  console.log(resBody);
})();
//!!END

// * SIMPLEST WAY
const getProducts = async () => {
    const result = await fetch('/products')

    if(result.ok){
        const data = await result.text()

        console.log(data)
    }
}

getProducts()
//

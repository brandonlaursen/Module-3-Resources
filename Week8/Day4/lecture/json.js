/*

  JSON - JavaScript Object Notation.
  * JSON is an open-standard file format that "uses human-readable text to transmit objects consisting of key-values pairs and array data types."
  * JSON is just a format for data.
  * JSON is just a string. It's just text.

  ! You will almost never write raw JSON but its good to know how to recognize and read it

  ! JSON always uses double quotes for strings.
  'this is "text"'  -> "this is \"text\""

  * escape character - \

  * An array -
  [1, 2, 3] -> "[1, 2, 3]"

  * An object -
  { person: true, name: "Roberta" } -> "{ \"person\": true, \"name\": \"Roberta\" }"

  * Booleans, numbers, null, etc
  true -> "true"
  false -> "false"
  12.34 -> "12.34"
  null -> "null"

  ! no trailing commas!

  * Serialization
  When you have some data and you want to turn it into a string (or some other kind of value like "binary") so your program can send it to another computer, that is the process of serialization.

  JSON object that has two methods on it that allows you to convert JSON-formatted strings into JavaScript objects and JavaScript object into JSON-formatted strings. They are:

  * JSON.stringify(value)
    - will turn the value passed into it into a string.
    - converts a value into JSON
    - Use JSON.stringify to serialize JavaScript objects


  * JSON.parse(str)
    - will turn a JSON-formatted string into a JavaScript object.
    - converts JSON to a js object
    - Use JSON.parse to deserialize JSON-formatted strings
    * req.json() - async way to parse json into js object
*/

// * JSON.stringify(value)
//     - will turn the value passed into it into a string.
//     - converts a value into JSON
//     - Use JSON.stringify to serialize JavaScript objects

const array = [1, 'hello, "world"', 3.14, { id: 17 }];
// console.log(JSON.stringify(array));
// prints [1, "hello, \"world\"", 3.14, {"id":17}]

// * JSON.parse(str)
// - will turn a JSON-formatted string into a JavaScript object.
// - converts JSON to a js object
// - Use JSON.parse to deserialize JSON-formatted strings

const str = '[1, "hello, \\"world\\""  ,3.14,{"id":17}]';
// console.log(JSON.parse(str));
// prints an array with the following entries:
//   0: 1
//   1: "hello, \"world\""
//   2: 3.14
//   3: { id: 17 }

// res/req.json()
// * the json() method of the Request interface reads the request body and returns it as a promise that resolves with the result of parsing the body text as JSON.
// * turns json into a js object

const fetch = require("node-fetch");

async function apiCall() {

  const response = await fetch("https://official-joke-api.appspot.com/jokes/random");

  // const parse = JSON.parse(response);

  // console.log(parse)
  // console.log(response);
  const body = await response.json();

  console.log(body);

}
apiCall();

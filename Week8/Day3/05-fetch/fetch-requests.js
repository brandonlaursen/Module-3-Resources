

/*

    Fetch
     - The Fetch API provides an interface for fetching resources (including across the network)
    * The fetch() method can optionally accept a second parameter, an init object that allows you to control a number of different settings:
    * url = "", data = {}
    * can specify data of the request
    * if request is a post we can specify the headers and the body
    * if request is a get we only need the url
    ! assessment will be like this, setting up the data endpoints for the fetch, no building out routes

*/


// * get all dogs
export function getAllDogs() {
  // Your code here
  const url = "/dogs";

  // const options = {
  //     method: 'GET',
  //     headers: {
  //         "Content-Type": 'text/html'
  //     }
  // }

  return fetch(url);
}

getAllDogs();

// * get second dog
export function getDogNumberTwo() {
  // Your code here
  return fetch("/dogs/2");
}

// * post new dog
export function postNewDog() {

  // * posting a new dog using just the the button
  const urlparams = new URLSearchParams({ name: "little bear", age: 14 });
  return fetch("/dogs", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: urlparams,
  });

  // return fetch('/dogs', {
  //     method: 'POST',
  //     headers: {
  //         "Content-Type": "application/x-www-form-urlencoded"
  //     },
  //     body: new URLSearchParams({
  //         "name":"hachi roku",
  //         "age": 86
  //     })
  // })
}

// * posting a dog using the form taking in arguments
export function postNewDogV2(name, age) {
  // Your code here
  return fetch("/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      name,
      age,
    }),
  });
}

// * delete dog
export function deleteDog(id) {

  return fetch(`/dogs/${id}/delete`, {
    method: "POST",
    headers: {
      AUTH: "ckyut5wau0000jyv5bsrud90y",
    },
  });
}

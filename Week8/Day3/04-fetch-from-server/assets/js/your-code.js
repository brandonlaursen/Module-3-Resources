export function getAllDogs() {
  return fetch("/dogs");
}

export function getDogNumberTwo() {
  return fetch("/dogs/2", {
    method: "GET",
  });
}

export function postNewDog() {
  // Your code here

  const urlSearchParam = new URLSearchParams({ name: "little bear", age: 15 });

  return fetch("/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: urlSearchParam,
  });
}

export function postNewDogV2(name, age) {
  // const urlSearchParam = new URLSearchParams({ name, age });

  return fetch("/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ name, age }),
  });
}

export function deleteDog(id) {
  // Your code here


  return fetch(`/dogs/${id}/delete`, {
    method: 'POST',
    headers: {
      AUTH: 'ckyut5wau0000jyv5bsrud90y'
    }
  })
}

/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image
        console.log(url);

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */

        const breed = url.split('/')[4];
        // console.log(breed);

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */

        const newDog = document.createElement('li');

        const newFigure = document.createElement('figure');

        const newImage = document.createElement('img');

        const newCaption = document.createElement('figcaption');

        // newImage.setAttribute('src', url);
        newImage.src = url

        newCaption.innerText = breed;

        newFigure.appendChild(newImage);

        newFigure.appendChild(newCaption);

        newDog.appendChild(newFigure);

        /* Add the new dog card as a child to the ul in the .gallery element */

        // console.log(newDog);
        const ul = document.querySelector('ul');
        // console.log(ul);

        ul.appendChild(newDog);



    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here

    // const firstDog = document.querySelector('li');
    const firstDog = document.querySelector(".gallery > ul > li");
    // console.log(firstDog);



    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    if(firstDog) {
        firstDog.remove();
    } else {
        // window.alert('no dogs left')
        console.log('no dogs left');
    }

});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const allDogs = document.querySelectorAll('li');

    let lastDog = allDogs[allDogs.length - 1];
    // console.log(lastDog);

    
    if(lastDog) {
        lastDog.remove();
    } else {
        window.alert('no dogs left, YOU MONSTER');
    }



});



const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    const seeded = document.querySelectorAll('.seed');
    // const seeded = document.getElementsByClassName('seed');
    // console.log(seeded)

    // 2. Get all seedless fruit elements
    const seedless = document.getElementsByClassName('seedless');
    // console.log(seedless);
    // [...seedless].forEach(fruit => console.log(fruit.innerText));

    // 3. Get first seedless fruit element
    const firstSeedless = document.getElementsByClassName('seedless');
    // console.log(firstSeedless[0]);

    /* Section 2 */
    // 4. Get inner span with text "you"
    const gotYou = document.querySelector("span");
    // console.log(gotYou)


    // 5. Get all children of element "wrapper"
    const wrapperChildren = document.getElementById('wrapper').children;

    // console.log(wrapperChildren);

    // 6. Get all odd number list items in the list
    // Your code here
    const odds = document.querySelectorAll('.odd');
    // console.log(odds);

    // 7. Get all even number list items in the list
    // Your code here
    // const evens = document.querySelectorAll('li:not(.odd)')
    const evens = document.querySelectorAll("ol>li:not(.odd)");

    // console.log(evens);

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here

    const techCompanies = document.querySelectorAll('#three p > a:not([class])');

    // console.log(techCompanies[0]);

    // [...techCompanies].forEach(com => console.log(com))

    // 9. Get "Amazon" list element
    // Your code here
    const amazon = document.querySelector('.shopping');
    console.log(amazon);

    // 10. Get all unicorn list elements (not the image element)

    // const unicornList = document.querySelector('#three > ul').children;

    

    const unicornListItems = document.body.querySelectorAll('#three > ul > li')
    // console.log(unicornListItems);
}

window.onload = select;

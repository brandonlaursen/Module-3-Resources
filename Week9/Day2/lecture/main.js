/*


  Element Selectors

  DOM - Document Object Model
    * DOM, is an object-oriented representation of an HTML document or Web page, meaning that the document is represented as objects, or nodes.
    * DOM is represented as a tree

  How do we reference the DOM
  * getElementById
  * getElementByClassName
  * getElementsByName
  * querySelector ->
  *   class '.classname'
  *         li.classname
  *   id    '#idname'
  *   tag
  * querySelectorAll

  HTMLCollection vs NodeList

  * HTMLCollection
    An HTML Collection contains an array-like object of HTML elements.
    * Consists of HTML elements
    * ex: a tag
    * <h1>Hello World!</h1>
    * h1 is an HTML Element

  * NodeList
    A NodeList contains an array-like object of Nodes.
    * Consist of HTML elements and smaller components
    * May include the content of the html element
    * ex:
    *  <h1>Hello World!</h1>
    * Node list may contain
      * <h1>Hello World!</h1>
      * And the content - Hello World!
*/

window.onload = () => {
  console.log("entering main.js");
  console.log(document.body);

  const findLastId = () => {
    const listItem = document.getElementById("1");
    // console.log(listItem);

    const items = document.querySelectorAll(".items");
    // console.log(items);

    // items.forEach(item => console.log(item));

    const lastItem = items[items.length - 1];

    // console.log(lastItem);

    const lastItemId = lastItem.getAttribute("id");
    // console.log(lastItemId)
    // console.log(lastItem.id);
    return +lastItemId;
  };
  // findLastId();

  // add list item
  const addListElement = () => {
    const newListItem = document.createElement("li");

    let nextId = findLastId();
    // console.log(nextId);

    nextId++;

    newListItem.setAttribute("id", `${nextId}`);
    console.log(newListItem.getAttribute("id"));
    newListItem.setAttribute("class", "items");

    newListItem.innerText = `Item ${nextId}`;
    // console.log(newListItem);

    // find ul to append this to
    const items = document.getElementById("items-list");
    // console.log(items);

    items.append(newListItem);

    console.log("added list element", newListItem);
    // create the element
    // set the attribute of the element
    // set the content of the element
    // append the element to another element

    return;
  };

  addListElement();


  const removeListElement = () => {

    const idToRemove = findLastId();

    const listElement = document.getElementById(`${idToRemove}`);
    // console.log(listElement);

    listElement.remove();

    console.log('last element removed', listElement);
    return;
  };

  // let membership = true;
  // if(!membership) {
  //   window.alert('BUY THIS')
  // }



};

/*


  The rendering engine
  * After a network response is made to a server and a response is sent back, the rendering engine begins to parse the HTML response and display that content in the browser.

  Constructing the DOM
  * The first step in the rendering process is the construction of the DOM.
  * When the HTML is received,
  * the rendering engine parses the HTML and constructs the Document Object Model, which is commonly known as the DOM.
  * The HTML is converted into nodes, which form the DOM tree (i.e. a hierarchy of nodes).
    * We know trees!
    * Each node in the tree is a HTML element


  DOM VS BOM
  * Browser Object Model - Interacting with the Browser
    - Hierarchy of browser objects
    * Consists of Navigator object - Information about the browser itself
    * Window object - The main browser window/ chief browser object
      * can access different properties on the object including:
        * window.navigator
        * window.screen
        * window.history
        * window.location
        * window.document - THIS IS OUR DOM
    * Document object

  * Document Object Model - Interacting with the document ie: manipulate HTML elements
    - The DOM contains a collection of nodes (HTML elements), that can be accessed and manipulated
    - DOM is a web page
    - Represents the hierarchy that document
    - The DOM is created after the HTML file is loaded.

    * The window object is the core of the BOM
    * We access the document object through the window object
    - window.document
    - can also just use document

*/




// console.log(window.document.title);



window.onload = () => {
  window.document.title = 'new title'

  console.log(document.body);

  let children = document.body.children

  console.log(children);

  const h1 = children[0];

  // console.log(h1);

  const div = children[1];
  // console.log(div)

  const divChildren = div.children;

  console.log(divChildren);

  
}

// console.log(document.body);

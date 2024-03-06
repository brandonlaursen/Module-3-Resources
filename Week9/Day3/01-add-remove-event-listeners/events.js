window.addEventListener("DOMContentLoaded", () => {
  // alert('dom')

  const redInput = document.getElementById("red-input");

  function changeToRed (e) {
    let value = e.target.value.trim().toLowerCase();

    if (value === "red") {
      redInput.style.backgroundColor = "red";
    } else {
      redInput.style.backgroundColor = "transparent";
    }
  };

  // redInput.addEventListener("input", (e) => {
  //   let value = e.target.value.trim().toLowerCase();

  //   if (value === "red") {
  //     redInput.style.backgroundColor = "red";
  //   } else {
  //     redInput.style.backgroundColor = "transparent";
  //   }
  // });

    redInput.addEventListener("input", changeToRed);

  const addItem = document.getElementById("add-item");

  const ul = document.querySelector("ul");

  const addToList = (e) => {
    const input = document.getElementById("list-add");

    const value = input.value;

    const li = document.createElement("li");

    li.innerText = value;

    ul.appendChild(li);

    input.value = "";
  };

  addItem.addEventListener("click", addToList);

  const colorSelector = document.getElementById("color-select");

  const changeColor = (e) => {
    const section = document.getElementById("section-3");

    section.style.backgroundColor = e.target.value;
  };

  colorSelector.addEventListener("input", changeColor);

  const removeListeners = document.getElementById("remove-listeners");

  removeListeners.addEventListener("click", () => {
    redInput.removeEventListener("input", changeToRed);
    addItem.removeEventListener("click", addToList);
    colorSelector.removeEventListener("input", changeColor);
  });
});

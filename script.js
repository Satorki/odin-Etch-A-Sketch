// CREATING INPUT AND BUTTON
let gridSize = document.createElement("input");
let gridSizeButton = document.createElement("button");

// STYLIZE BUTTON AND INPUT
gridSizeButton.innerText = "Make";
gridSizeButton.style.margin = "0 0 0 10px";

gridSize.type = "number";
gridSize.value = "16";
gridSize.min = "16";
gridSize.max = "100";

// SELECTORS FOR BODY, CONTAINER, BUTTON
let body = document.querySelector("body");
let container = document.querySelector(".container");

// INSERTING INPUT AND BUTTON TO PAGE
body.insertBefore(gridSize, container);
body.insertBefore(gridSizeButton, container);

const gridFinal = () => {
let div = document.createElement("div");

    for (let i = 0; i < gridSize.value; i++) {
        container.appendChild(div);
    }
};

// CREATING A DIV-CONTAINER
gridSizeButton.addEventListener("click", gridFinal);

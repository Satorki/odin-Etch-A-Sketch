// CREATING INPUT, BUTTON
let gridSize = document.createElement("input");
let gridSizeButton = document.createElement("button");


// STYLIZE BUTTON AND INPUT
gridSizeButton.innerText = "Make";
gridSizeButton.style.margin = "0 0 0 10px";

gridSize.type = "number";
gridSize.value = "10";
gridSize.min = "1";
gridSize.max = "100";

// SELECTORS FOR BODY, CONTAINER, BUTTON
let body = document.querySelector("body");
let container = document.querySelector(".container");

// INSERTING INPUT AND BUTTON TO PAGE
body.insertBefore(gridSize, container);
body.insertBefore(gridSizeButton, container);

const gridFinal = () => {
    // WIDTH,HEIGHT VALUE of BOX
    let divWidth = 600 / gridSize.value + "px";
    let divHeight = 600 / gridSize.value + "px";

    // SAFETY FOR TO LOW OR TO HIGH NUMBER INSERTION
    if (gridSize.value > 100) {
        alert("to high number")
    } else if (gridSize.value < 1) {
        alert("to low number")
    } else {
    for (let i = 0; i < gridSize.value * gridSize.value; i++) {
        let div = document.createElement("div");
        container.appendChild(div);

        div.style.width = divWidth;
        div.style.height = divHeight;
    }
    }

};




// CREATING A DIV-CONTAINER
gridSizeButton.addEventListener("click", gridFinal);

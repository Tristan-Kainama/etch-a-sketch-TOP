const gridContainer = document.querySelector("#container");
const gridSize = 16;

console.log("test");

function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        gridContainer.appendChild(square);
    }
}

createGrid();
const gridContainer = document.querySelector("#container");
const gridSize = 16;

function createGrid(container, size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = "calc(100% / " + size + ")";
        square.style.height = "calc(100% / " + size + ")";
        container.appendChild(square);
    }
}

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function addHoverEffect() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomRgbColor();
        })
    })
}

const canvasButton = document.querySelector(".canvas-button");

let number = 0;
canvasButton.addEventListener("click", function() {
    let newCanvasSize = parseInt(prompt("Pick a new canvas size (1-100):"));

    while (!(newCanvasSize >= 1 && newCanvasSize <=100)) {
        alert("Please insert a number between 1-100");
        newCanvasSize = parseInt(prompt("Pick a new canvas size (1-100):"));
    };

    const currentGrid = document.getElementById('container');
    document.body.removeChild(currentGrid);
    const newGridContainer = document.createElement("div");
    newGridContainer.id = "container";
    document.body.appendChild(newGridContainer);
    createGrid(newGridContainer, newCanvasSize);
    addHoverEffect();
})

createGrid(gridContainer, gridSize);
addHoverEffect();
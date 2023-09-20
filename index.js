const DEFAULT_COLOR = '#e4e4e4';

const container = document.getElementById("container");
const btnResize = document.getElementById('btnGridResize');

function gridResize(gridTiles){
    container.style.gridTemplateColumns = `repeat(${gridTiles}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridTiles}, 1fr)`;
    
    for (let i = 0; i < gridTiles * gridTiles; i++){
        const createDiv = document.createElement("div");
        createDiv.classList.add("square-box");
        container.appendChild(createDiv);
    };    
}

function hovering(){
    const boxColored = document.querySelectorAll(".square-box");
    boxColored.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "#4b4b4b";
        });
        
        box.addEventListener("mouseout", () => {
            setTimeout(() => {
                box.style.backgroundColor = "#e4e4e4";
            }, 5000);
        })
    });
}

function resetColor(){
    const boxReset = document.querySelectorAll(".square-box");
    boxReset.forEach((box) => {
        box.style.backgroundColor = DEFAULT_COLOR;
    });
}

gridResize(16); //default
hovering();

btnResize.addEventListener('click', () => {
    sides = prompt("Number of squares per side:");
    resetColor();
    if (sides <= 100){
        gridResize(sides);
        hovering();
        console.log(sides);
    } else {
        alert("100 and below only.");
    }
})



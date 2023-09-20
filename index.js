const DEFAULT_COLOR = '#e4e4e4';

const container = document.getElementById('container');
const btnResize = document.getElementById('btnGridResize');
const btnRandomColor = document.getElementById('btnRandomColor');
const btnResetColor = document.getElementById('btnResetColor');

function gridResize(gridTiles){
    container.style.gridTemplateColumns = `repeat(${gridTiles}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridTiles}, 1fr)`;
    
    container.innerHTML = ''; // clear container to avoid lag

    for (let i = 0; i < gridTiles * gridTiles; i++){
        const createDiv = document.createElement("div");
        createDiv.classList.add("square-box");
        container.appendChild(createDiv);
    
        createDiv.addEventListener("mouseover", () => {
            createDiv.style.backgroundColor = "#4b4b4b";
            createDiv.style.opacity = parseFloat(createDiv.style.opacity || 0) + 0.3;
        });

        createDiv.addEventListener("mouseout", () => {
            setTimeout(() => {
                createDiv.style.backgroundColor = DEFAULT_COLOR;
                createDiv.style.opacity = 1;
            }, 5000);
        })
    }
};

function resetColor(){
    const boxReset = document.querySelectorAll(".square-box");
    boxReset.forEach((box) => {
        box.style.backgroundColor = DEFAULT_COLOR;
        box.style.opacity = 1;
    });
}


function randomColor(){
    const boxColored = document.querySelectorAll(".square-box");
    boxColored.forEach((box) => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
    
        let randomColor = `rgb(${red}, ${green}, ${blue})`;
    
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = randomColor;
            box.style.opacity = parseFloat(box.style.opacity || 0) + 0.2;
        });
        box.addEventListener('mouseout', () => {
            setTimeout(() => {
                box.style.backgroundColor = DEFAULT_COLOR;
                box.style.opacity = 1;
            }, 5000);
        });
    });
    console.log(`Random color: ${randomColor}`);
}

gridResize(16); //default

btnResize.addEventListener('click', () => {
    sides = prompt("Grid size (1 - 100) :");
    resetColor();
    if (sides <= 100){
        gridResize(sides);
        console.log(sides);
    } else {
        alert("100 and below only.");
    }
})

btnRandomColor.addEventListener('click', () => {
    randomColor();
});

btnResetColor.addEventListener('click', () => {
    resetColor();
})

let gridSize = prompt('Enter grid size');
//Changes grid size to number
+gridSize;
//Calculates amount of squares needed
let allSquares = gridSize * gridSize;
//Size of every box
let boxSize = 10;
//Calculates container width
let containerWidth = gridSize * boxSize + 'px';

//For each square, add a div to container with a class of box
const container = document.getElementById("container");
for (var i = 0; i < allSquares; i++) {
   div = document.createElement('div');
   div.classList.add('box');
   container.appendChild(div);
}

let boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
   box.addEventListener('mouseover', () => {
      box.style.backgroundColor = 'black'
    });
});

container.style.maxWidth = containerWidth;
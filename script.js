const chooseGridSize = document.querySelector('.gridSize');
const container = document.getElementById("container");
const resetButton = document.querySelector('.resetButton');

chooseGridSize.addEventListener('click', () => {
   removeGrid();
   createGrid();
});

resetButton.addEventListener('click', () => {
   reset();
});


let boxSize = 10;

function createGrid () {
   let gridSize = prompt('Enter grid size');

   while (gridSize < 10 || gridSize > 100) {
      gridSize = prompt('Please enter a number between 10 and 100');
   }

   //Changes grid size to number
   +gridSize;
   let allSquares = gridSize * gridSize;
   let containerWidth = gridSize * boxSize + 'px';
   container.style.maxWidth = containerWidth;

   //For each square, add a div to container with a class of box
   for (var i = 0; i < allSquares; i++) {
      div = document.createElement('div');
      div.classList.add('box');
      container.appendChild(div);
   }

   let boxes = document.querySelectorAll('.box');

   //Select all boxes and add a mouseover event listener
   boxes.forEach((box) => {
      box.addEventListener('mouseover', () => {
         box.style.backgroundColor = 'black'
      });
   });
}

function removeGrid () {
   let boxes = document.querySelectorAll('.box');
   boxes.forEach((box) => {
      box.remove();
   });
}

function reset () {
   let boxes = document.querySelectorAll('.box');
   boxes.forEach((box) => {
      box.style.backgroundColor = 'white';
   });
}


const chooseGridSize = document.querySelector('.gridSize')
const container = document.getElementById("container");

chooseGridSize.addEventListener('click', () => {
   removeGrid();
   createGrid();
});

let boxSize = 10;

function createGrid () {
   let gridSize = prompt('Enter grid size');
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

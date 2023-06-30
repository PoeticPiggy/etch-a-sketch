let gridSize = 16;
let allSquares = gridSize * gridSize;
//Size of every box
let boxSize = 10;
let containerWidth = gridSize * boxSize + 'px';

const container = document.getElementById("container");
for (var i = 0; i < allSquares; i++) {
   container.innerHTML += '<div class="box"></div>';
}
let boxes = document.querySelectorAll('.box')

boxes.forEach((box) => {
   box.addEventListener('mouseover', () => {
      box.style.backgroundColor = 'black'
    });
});

container.style.maxWidth = containerWidth;
let gridSize = 16;
let allSquares = gridSize * gridSize;

const container = document.getElementById("container");
for (var i = 0; i < allSquares; i++) {
   container.innerHTML += '<div class="box"></div>';
}
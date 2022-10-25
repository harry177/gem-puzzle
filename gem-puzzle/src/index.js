import './style.css';


let firstCells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

let arrSize = 4;

let cells = [];

let cellRadius = 62;

function mixAndRun() {

firstCells.sort(() => Math.random() - 0.5);



for (let i = 0; i < firstCells.length / arrSize; i++) {
  cells[i] = firstCells.slice(i*arrSize, i*arrSize + arrSize);
  cells.length = arrSize;
}

return cells;
}

mixAndRun();



let clicks = 0;


let contentBox = document.createElement('div');
contentBox.className = 'content__box';
document.body.append(contentBox);

let buttonsContainer = document.createElement('div');
buttonsContainer.className = 'buttons__container';
contentBox.append(buttonsContainer);

let shuffleButton = document.createElement('button');
shuffleButton.className = 'button';
shuffleButton.innerText = 'Shuffle';
buttonsContainer.append(shuffleButton);
shuffleButton.addEventListener('click', function() {
  mixAndRun();
  drawCells();
});

let stopButton = document.createElement('button');
stopButton.className = 'button';
stopButton.innerText = 'Stop';
buttonsContainer.append(stopButton);

let saveButton = document.createElement('button');
saveButton.className = 'button';
saveButton.innerText = 'Save';
buttonsContainer.append(saveButton);

let resultsButton = document.createElement('button');
resultsButton.className = 'button';
resultsButton.innerText = 'Results';
buttonsContainer.append(resultsButton);

let countBox = document.createElement('div');
countBox.className = 'count__box';
contentBox.append(countBox);

let movesContainer = document.createElement('div');
movesContainer.className = 'moves__container';
movesContainer.innerText = `Moves: ${clicks}`;
countBox.append(movesContainer);

let timeContainer = document.createElement('div');
timeContainer.className = 'time__container';
timeContainer.innerText = '00 : 00';
countBox.append(timeContainer);



let game = document.createElement('canvas');
    game.width = 500;
    game.height = 500;
    game.className = 'canvas';
    contentBox.append(game);
  
    let context = game.getContext("2d");
  
    let columns = game.width / arrSize;
    let rows = game.height / arrSize;



let currSizeBox = document.createElement('div');
currSizeBox.className = 'current__size__box';
currSizeBox.innerText = '4x4';
contentBox.append(currSizeBox);

let sizesBox = document.createElement('div');
sizesBox.className = 'sizes__box';
contentBox.append(sizesBox);

let sizesChoice = document.createElement('div');
sizesChoice.className = 'sizes__choice';
sizesChoice.innerText = 'Other sizes:';
sizesBox.append(sizesChoice);

let sizeInstance__3x3 = document.createElement('button');
sizeInstance__3x3.className = 'size__instance__3x3';
sizeInstance__3x3.innerText = '3x3';
sizesBox.append(sizeInstance__3x3);
sizeInstance__3x3.addEventListener('click', function() {
  firstCells = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  arrSize = 3;
  cellRadius = 83;
  columns = game.width / arrSize;
  rows = game.height / arrSize;
  context.clearRect(0, 0, game.width, game.height);
  mixAndRun();
  drawCells();
  currSizeBox.innerText = '3x3';
  console.log(cells);
})

let sizeInstance__4x4 = document.createElement('button');
sizeInstance__4x4.className = 'size__instance__4x4';
sizeInstance__4x4.innerText = '4x4';
sizesBox.append(sizeInstance__4x4);
sizeInstance__4x4.addEventListener('click', function() {
  firstCells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
  arrSize = 4;
  cellRadius = 62;
  columns = game.width / arrSize;
  rows = game.height / arrSize;
  context.clearRect(0, 0, game.width, game.height);
  mixAndRun();
  drawCells();
  currSizeBox.innerText = '4x4';
})

let sizeInstance__5x5 = document.createElement('button');
sizeInstance__5x5.className = 'size__instance__5x5';
sizeInstance__5x5.innerText = '5x5';
sizesBox.append(sizeInstance__5x5);
sizeInstance__5x5.addEventListener('click', function() {
  firstCells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 0];
  arrSize = 5;
  cellRadius = 50;
  columns = game.width / arrSize;
  rows = game.height / arrSize;
  context.clearRect(0, 0, game.width, game.height);
  mixAndRun();
  drawCells();
  currSizeBox.innerText = '5x5';
})

let sizeInstance__6x6 = document.createElement('button');
sizeInstance__6x6.className = 'size__instance__6x6';
sizeInstance__6x6.innerText = '6x6';
sizesBox.append(sizeInstance__6x6);
sizeInstance__6x6.addEventListener('click', function() {
  firstCells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 0];
  arrSize = 6;
  cellRadius = 41.5;
  columns = game.width / arrSize;
  rows = game.height / arrSize;
  context.clearRect(0, 0, game.width, game.height);
  mixAndRun();
  drawCells();
  currSizeBox.innerText = '6x6';
})

let sizeInstance__7x7 = document.createElement('button');
sizeInstance__7x7.className = 'size__instance__7x7';
sizeInstance__7x7.innerText = '7x7';
sizesBox.append(sizeInstance__7x7);
sizeInstance__7x7.addEventListener('click', function() {
  firstCells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 0];
  arrSize = 7;
  cellRadius = 35.5;
  columns = game.width / arrSize;
  rows = game.height / arrSize;
  context.clearRect(0, 0, game.width, game.height);
  mixAndRun();
  drawCells();
  currSizeBox.innerText = '7x7';
})

let sizeInstance__8x8 = document.createElement('button');
sizeInstance__8x8.className = 'size__instance__8x8';
sizeInstance__8x8.innerText = '8x8';
sizesBox.append(sizeInstance__8x8);
sizeInstance__8x8.addEventListener('click', function() {
  firstCells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 0];
  arrSize = 8;
  cellRadius = 31.2;
  columns = game.width / arrSize;
  rows = game.height / arrSize;
  context.clearRect(0, 0, game.width, game.height);
  mixAndRun();
  drawCells();
  currSizeBox.innerText = '8x8';
})



window.onload = function() {
  mixAndRun();
  drawCells();
  
}


// Drawing the game

function drawCells() {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {

      let x = j*rows + 1;
      let y = i*columns + 1;
      let cellWidth = columns - 5;
      let cellHeigth = rows - 5;
      

      if (cells[i][j] !== 0) {
        
      context.fillRect(x, y, cellWidth, cellHeigth);
      context.strokeStyle = 'white';
      context.font = 'bold 16px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'center';
      context.strokeText(cells[i][j], j*rows + cellRadius, i*columns + cellRadius);
      
      } else {
        context.clearRect(x, y, cellWidth, cellHeigth);
      }
      
    }
  }
}

drawCells();


// Initializing coordinates

game.onclick = function(e) {
  let x = (e.pageX - game.offsetLeft) / columns | 0;
  let y = (e.pageY - game.offsetTop)  / columns | 0;
  onEvent(x, y); 
};

game.ontouchend = function(e) {
  let x = (e.touches[0].pageX - game.offsetLeft) / columns | 0;
  let y = (e.touches[0].pageY - game.offsetTop)  / columns | 0;
  onEvent(x, y);
}; 



// Launching events

function onEvent(x, y) {
  getNullCell();
  move(x, y);
  drawCells();
  winner();
  console.log(cells);
  console.log(clicks);
}


// Defining zero-cell

function getNullCell(){
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      if(cells[j][i] === 0){
        return {x: i, y: j};
      }
    }
  }
};



// Moveing cells

function move(x, y) {

  let nullCell = getNullCell();

  let canMoveVertical = (x == nullCell.x + 1 || x == nullCell.x - 1) && y == nullCell.y;
  let canMoveHorizontal = (y == nullCell.y + 1 || y == nullCell.y - 1) && x == nullCell.x; 
  
  
  if (canMoveVertical || canMoveHorizontal) {
    cells[nullCell.y][nullCell.x] = cells[y][x];
    cells[y][x] = 0;
    
    clicks++;
    console.log(clicks)
  }
};



// Winner message


function winner() {

  if (cells === [1, 2, 3, 4, 5, 6, 7, 8, 0] || cells === [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]]) {
    alert ("Hooray! You solved the puzzle in ##:## and N moves!");
  }
}

winner();




if (cells === [[1, 2, 3], [4, 5, 6], [7, 8, 0]]) {
  alert('eeee');
}

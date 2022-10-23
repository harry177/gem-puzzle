import './style.css';




let buttonsContainer = document.createElement('div');
buttonsContainer.className = 'buttons__container';
document.body.append(buttonsContainer);

let shuffleButton = document.createElement('button');
shuffleButton.className = 'button';
shuffleButton.innerText = 'Shuffle';
buttonsContainer.append(shuffleButton);

let stopButton = document.createElement('button');
let saveButton = document.createElement('button');
let resultsButton = document.createElement('button');
let movesContainer = document.createElement('div');
let timeContainer = document.createElement('div');
let currSizeBox = document.createElement('div');
let sizesBox = document.createElement('div');


let cells = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 0]
];



let clicks = 0;

let game = document.createElement('canvas');
    game.width = 600;
    game.height = 600;
    game.className = 'canvas';
    document.body.append(game);
  
    let context = game.getContext("2d");
  
    let columns = game.width / 4;
    let rows = game.height / 4;


window.onload = function() {
  drawCells();
}


// Drawing the game

function drawCells() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {

      let x = j*rows + 1;
      let y = i*columns + 1;
      let cellWidth = columns - 2;
      let cellHeigth = rows - 2;

      if (cells[i][j] !== 0) {
        
      context.fillRect(x, y, cellWidth, cellHeigth);
      context.strokeStyle = 'white';
      context.font = 'bold 24px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'center';
      context.strokeText(cells[i][j], j*rows + 75, i*columns + 75);
      
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
  console.log(cells);
  
  drawCells();
  console.log(cells);
  
}


// Defining zero-cell

function getNullCell(){
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
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
  }
};




//function move() {
  //for (let i = 0; i < cells.lenght; i++) {
    //for (let j = 0; j < cells[i].length; j++) {
     // if (cells[j][i] === 0) {
       // let zeroCell = cells[i][j];
        //let leftCell = cells.indexOf(zeroCell - 1);

        //leftCell.beginPath();
        //leftCell.arc(50, 50, 10, 0, Math.PI*2)
       // leftCell.closePath();

       // console.log(zeroCell)

      //}
    //}
  //}
//};






  // let zeroCell;
  // let leftCell = cells.indexOf(zeroCell - 1);
  // let rightCell = cells.indexOf(zeroCell + 1);
  // let upperCell = cells.indexOf(zeroCell - 4);
  // let downCell = cells.indexOf(zeroCell + 4);

 


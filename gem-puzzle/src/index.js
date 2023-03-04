import './style.css';
import movesound from '../assets/music/move-sound.mp3'

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


let shadowBody = document.createElement('div');
shadowBody.className = 'shadow__body';
document.body.append(shadowBody);
shadowBody.addEventListener('click', function() {
  shadowBody.classList.remove('show__shadow');
  resultsDesk.classList.remove('show__results');
})

let resultsDesk = document.createElement('div');
resultsDesk.className = 'results__desk';
document.body.append(resultsDesk);
resultsDesk.addEventListener('click', function() {
  shadowBody.classList.remove('show__shadow');
  resultsDesk.classList.remove('show__results');
})

let resultsList = document.createElement('ol');
resultsList.className = 'results__list';
resultsDesk.append(resultsList);


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
  clearInterval(timer);
  clicks = 0;
  second = 0;
  movesContainer.innerText = `Moves: ${clicks}`;
  timeContainer.innerText = 'Time: 00:00';
});

let soundButton = document.createElement('button');
soundButton.className = 'button';
soundButton.innerText = 'Sound on/off';
buttonsContainer.append(soundButton);
soundButton.addEventListener('click', function() {
  if (play) {
    play = false;
  } else {
    play = true;
  }
})

let saveButton = document.createElement('button');
saveButton.className = 'button';
saveButton.innerText = 'Save';
buttonsContainer.append(saveButton);
saveButton.addEventListener('click', function() {
  saveResults();
})

let resultsButton = document.createElement('button');
resultsButton.className = 'button';
resultsButton.innerText = 'Results';
buttonsContainer.append(resultsButton);
resultsButton.addEventListener('click', function() {
  resultsDesk.classList.add('show__results');
  shadowBody.classList.add('show__shadow');
  showResults();
})

let countBox = document.createElement('div');
countBox.className = 'count__box';
contentBox.append(countBox);

let movesContainer = document.createElement('div');
movesContainer.className = 'moves__container';
movesContainer.innerText = `Moves: ${clicks}`;
countBox.append(movesContainer);

let timeContainer = document.createElement('div');
timeContainer.className = 'time__container';
timeContainer.innerText = 'Time: 00:00';
countBox.append(timeContainer);



let game = document.createElement('canvas');
    
    game.className = 'canvas';
    contentBox.append(game);
  
    let context = game.getContext("2d");
  
    let columns = game.width / arrSize;
    let rows = game.height / arrSize;

    let cellWidth = columns - 2;
    let cellHeigth = rows - 2;


    // Media queries

let mediaBig = window.matchMedia('(min-width: 1281px)');    
let mediaMiddle = window.matchMedia('(max-width: 1280px) and (min-width: 768px)');    
let mediaSmall = window.matchMedia('(max-width: 767px)');


if (mediaBig.matches) {
  game.width = 540;
  game.height = 540;
} else if (mediaMiddle.matches) {
  game.width = 460;
  game.height = 460;
} else if (mediaSmall.matches) {
  game.width = 320;
  game.height = 320;
};





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
  cellRadius = cellWidth / 2;
  columns = game.width / arrSize;
  rows = game.height / arrSize;
  context.clearRect(0, 0, game.width, game.height);
  mixAndRun();
  drawCells();
  clearInterval(timer);
  clicks = 0;
  second = 0;
  movesContainer.innerText = `Moves: ${clicks}`;
  timeContainer.innerText = 'Time: 00:00';
  currSizeBox.innerText = '3x3';
})

let sizeInstance__4x4 = document.createElement('button');
sizeInstance__4x4.className = 'size__instance__4x4';
sizeInstance__4x4.innerText = '4x4';
sizesBox.append(sizeInstance__4x4);
sizeInstance__4x4.addEventListener('click', function() {
  firstCells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
  arrSize = 4;
  cellRadius = cellWidth / 2;
  columns = game.width / arrSize;
  rows = game.height / arrSize;
  context.clearRect(0, 0, game.width, game.height);
  mixAndRun();
  drawCells();
  clearInterval(timer);
  clicks = 0;
  second = 0;
  movesContainer.innerText = `Moves: ${clicks}`;
  timeContainer.innerText = 'Time: 00:00';
  currSizeBox.innerText = '4x4';
})

let sizeInstance__5x5 = document.createElement('button');
sizeInstance__5x5.className = 'size__instance__5x5';
sizeInstance__5x5.innerText = '5x5';
sizesBox.append(sizeInstance__5x5);
sizeInstance__5x5.addEventListener('click', function() {
  firstCells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 0];
  arrSize = 5;
  cellRadius = cellWidth / 2;
  columns = game.width / arrSize;
  rows = game.height / arrSize;
  context.clearRect(0, 0, game.width, game.height);
  mixAndRun();
  drawCells();
  clearInterval(timer);
  clicks = 0;
  second = 0;
  movesContainer.innerText = `Moves: ${clicks}`;
  timeContainer.innerText = 'Time: 00:00';
  currSizeBox.innerText = '5x5';
})

let sizeInstance__6x6 = document.createElement('button');
sizeInstance__6x6.className = 'size__instance__6x6';
sizeInstance__6x6.innerText = '6x6';
sizesBox.append(sizeInstance__6x6);
sizeInstance__6x6.addEventListener('click', function() {
  firstCells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 0];
  arrSize = 6;
  cellRadius = cellWidth / 2;
  columns = game.width / arrSize;
  rows = game.height / arrSize;
  context.clearRect(0, 0, game.width, game.height);
  mixAndRun();
  drawCells();
  clearInterval(timer);
  clicks = 0;
  second = 0;
  movesContainer.innerText = `Moves: ${clicks}`;
  timeContainer.innerText = 'Time: 00:00';
  currSizeBox.innerText = '6x6';
})

let sizeInstance__7x7 = document.createElement('button');
sizeInstance__7x7.className = 'size__instance__7x7';
sizeInstance__7x7.innerText = '7x7';
sizesBox.append(sizeInstance__7x7);
sizeInstance__7x7.addEventListener('click', function() {
  firstCells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 0];
  arrSize = 7;
  cellRadius = cellWidth / 2;
  columns = game.width / arrSize;
  rows = game.height / arrSize;
  context.clearRect(0, 0, game.width, game.height);
  mixAndRun();
  drawCells();
  clearInterval(timer);
  clicks = 0;
  second = 0;
  movesContainer.innerText = `Moves: ${clicks}`;
  timeContainer.innerText = 'Time: 00:00';
  currSizeBox.innerText = '7x7';
})

let sizeInstance__8x8 = document.createElement('button');
sizeInstance__8x8.className = 'size__instance__8x8';
sizeInstance__8x8.innerText = '8x8';
sizesBox.append(sizeInstance__8x8);
sizeInstance__8x8.addEventListener('click', function() {
  firstCells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 0];
  arrSize = 8;
  cellRadius = cellWidth / 2;
  columns = game.width / arrSize;
  rows = game.height / arrSize;
  context.clearRect(0, 0, game.width, game.height);
  mixAndRun();
  drawCells();
  clearInterval(timer);
  clicks = 0;
  second = 0;
  movesContainer.innerText = `Moves: ${clicks}`;
  timeContainer.innerText = 'Time: 00:00';
  currSizeBox.innerText = '8x8';
})



window.onload = function() {

  columns = game.width / arrSize;
  rows = game.height / arrSize;

  cellWidth = columns - 2;
  cellHeigth = rows - 2;
  
  if (mediaBig.matches) {
    game.width = 540;
    game.height = 540;
  } else if (mediaMiddle.matches) {
    game.width = 460;
    game.height = 460;
  } else if (mediaSmall.matches) {
    game.width = 320;
    game.height = 320;
  };

  mixAndRun();
  drawCells();
}


// Drawing the game

function drawCells() {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {

      let x = j*rows + 1;
      let y = i*columns + 1;
      cellWidth = columns - 2;
      cellHeigth = rows - 2;
      

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

// game.ontouchend = function(e) {
  // let x = (e.touches[0].pageX - game.offsetLeft) / columns | 0;
  // let y = (e.touches[0].pageY - game.offsetTop)  / columns | 0;
  // onEvent(x, y);
// }; 

// game.draggable = function(e) {
  // let x = (e.pageX - game.offsetLeft) / columns | 0;
  // let y = (e.pageY - game.offsetTop)  / columns | 0;
  // onEvent(x, y);
// }; 

// function drag() {
  // for (let i = 0; i < cells.length; i++) {
    // for (let j = 0; j < cells[i].length; j++) {
      // game.draggable = true;
    // }
  // }
// }

// drag();



// Launching events

function onEvent(x, y) {
  getNullCell();
  move(x, y);
  drawCells();
  if (cells.length === 3) {
  victory3x3();
  } else if (cells.length === 4) {
    victory4x4();
  } else if (cells.length === 5) {
    victory5x5();
  } else if (cells.length === 6) {
    victory6x6();
  } else if (cells.length === 7) {
    victory7x7();
  } else if (cells.length === 8) {
    victory8x8();
  }
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



// Moveing cells + timer

let timer;
let second = 0;

let minutes;
let seconds;

function move(x, y) {

  let nullCell = getNullCell();

  let canMoveVertical = (x == nullCell.x + 1 || x == nullCell.x - 1) && y == nullCell.y;
  let canMoveHorizontal = (y == nullCell.y + 1 || y == nullCell.y - 1) && x == nullCell.x; 
  
  
  if (canMoveVertical || canMoveHorizontal) {
    canMoveVertical.draggable;
    canMoveHorizontal.draggable;
    cells[nullCell.y][nullCell.x] = cells[y][x];
    cells[y][x] = 0;
    clicks++;
    music();
  }
  
  movesContainer.innerText = `Moves: ${clicks}`;
  if (clicks === 1) {
    timer = setInterval(function () {
    seconds = ("0" + (second % 60)).slice(-2);
    minutes = ("0" + Math.floor(second / 60)).slice(-2);
    timeContainer.innerText = "Time: " + minutes + ":" + seconds;
    second++;
  }, 1000);
} else if (clicks === 0) {
  timeContainer.innerText = 'Time: 00:00';
}
  
};



// Victory message


function victory3x3() {
  var e = [[1,2,3], [4,5,6], [7,8,0]];
  var res = true;
  for (var i = 0; i < e.length; i++) {
    for (var j = 0; j < e[i].length; j++) {
      if (e[i][j] != cells[i][j]) {
        res = false;
      }
    }
  }
  if (res == true) {
    alert(`Hooray! You solved the puzzle in ${minutes}:${seconds} and ${clicks} moves!`);
    localStorage.setItem(`Time: ${minutes}:${seconds}`, `Moves: ${clicks}` );
  }
};


function victory4x4() {
  var e = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,0]];
  var res = true;
  for (var i = 0; i < e.length; i++) {
    for (var j = 0; j < e[i].length; j++) {
      if (e[i][j] != cells[i][j]) {
        res = false;
      }
    }
  }
  if (res == true) {
    alert(`Hooray! You solved the puzzle in ${minutes}:${seconds} and ${clicks} moves!`);
    localStorage.setItem(`Time: ${minutes}:${seconds}`, `Moves: ${clicks}` );
  }
};

function victory5x5() {
  var e = [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20], [21,22,23,24,0]];
  var res = true;
  for (var i = 0; i < e.length; i++) {
    for (var j = 0; j < e[i].length; j++) {
      if (e[i][j] != cells[i][j]) {
        res = false;
      }
    }
  }
  if (res == true) {
    alert(`Hooray! You solved the puzzle in ${minutes}:${seconds} and ${clicks} moves!`);
    localStorage.setItem(`Time: ${minutes}:${seconds}`, `Moves: ${clicks}` );
  }
};

function victory6x6() {
  var e = [[1,2,3,4,5,6], [7,8,9,10,11,12], [13,14,15,16,17,18], [19,20,21,22,23,24], [25,26,27,28,29,30], [31,32,33,34,35,0]];
  var res = true;
  for (var i = 0; i < e.length; i++) {
    for (var j = 0; j < e[i].length; j++) {
      if (e[i][j] != cells[i][j]) {
        res = false;
      }
    }
  }
  if (res == true) {
    alert(`Hooray! You solved the puzzle in ${minutes}:${seconds} and ${clicks} moves!`);
    localStorage.setItem(`Time: ${minutes}:${seconds}`, `Moves: ${clicks}` );
  }
};

function victory7x7() {
  var e = [[1,2,3,4,5,6,7], [8,9,10,11,12,13,14], [15,16,17,18,19,20,21], [22,23,24,25,26,27,28], [29,30,31,32,33,34,35], [36,37,38,39,40,41,42], [43,44,45,46,47,48,0]];
  var res = true;
  for (var i = 0; i < e.length; i++) {
    for (var j = 0; j < e[i].length; j++) {
      if (e[i][j] != cells[i][j]) {
        res = false;
      }
    }
  }
  if (res == true) {
    alert(`Hooray! You solved the puzzle in ${minutes}:${seconds} and ${clicks} moves!`);
    localStorage.setItem(`Time: ${minutes}:${seconds}`, `Moves: ${clicks}` );
  }
};

function victory8x8() {
  var e = [[1,2,3,4,5,6,7,8], [9,10,11,12,13,14,15,16], [17,18,19,20,21,22,23,24], [25,26,27,28,29,30,31,32], [33,34,35,36,37,38,39,40], [41,42,43,44,45,46,47,48], [49,50,51,52,53,54,55,56], [57,58,59,60,61,62,63,64]];
  var res = true;
  for (var i = 0; i < e.length; i++) {
    for (var j = 0; j < e[i].length; j++) {
      if (e[i][j] != cells[i][j]) {
        res = false;
      }
    }
  }
  if (res == true) {
    alert(`Hooray! You solved the puzzle in ${minutes}:${seconds} and ${clicks} moves!`);
    localStorage.setItem(`Time: ${minutes}:${seconds}`, `Moves: ${clicks}` );
  }
};



// Sound of moves

let play = true;

function music() {
  let audio = new Audio();

  if (play) {
    audio.src = movesound;
    audio.play();
  }
}


// Saving results

function saveResults() {
  localStorage.setItem(`Time: ${minutes}:${seconds}`, `Moves: ${clicks}` );
}


// Showing results

function showResults() {
  resultsList.replaceChildren();
  let key;
  for (let i = 0; i < localStorage.length; i++) {
  key = localStorage.key(i);
  resultsList.append(document.createElement('li'));
  resultsList.childNodes[i].innerText = `${key} & ${localStorage.getItem(key)}`;
  }
}


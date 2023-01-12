// Board creation
// a connect 4 board size never changes so no user input needed

// User Interface
const body = document.querySelector("body");
body.innerHTML = `
<div id = "winningScreen">
  <h1 id = "winningText"></h1>
  <button onclick="reset()">New Game</button>
</div>
<header>
  <h1>Connect 4</h1>
  <button onclick="reset()">Restart</button>
  <p id="playerTurn"></p>
</header>
<main>
  <div id = "gameBoardCon"></div>
</main>
<footer>© Nathan Cai</footer>
`;

// Global Variables used;
const gameBoardCon = document.querySelector("#gameBoardCon")
const winningScreen = document.querySelector("#winningScreen");
const winningText = document.querySelector("#winningText");
const playerTurn = document.querySelector("#playerTurn");
const peachPiece = "Peach";
const orangePiece = "Orange";
let gameBoardArr = [];
let isPeach = true;
let piecesPlaced = 0;

// Populate Array with arrays of objects
function populateArr(){
  for(let y = 0; y < 6; y++){
    const row = [];
    for(let x = 0; x< 7; x++){
      const div = document.createElement("div");
      div.classList.add("empty");
      div.addEventListener("click",()=>{
        addMarker(x);
      });
      div.addEventListener("mouseenter", ()=>{
        hightLightColumn(x);
      })
      div.addEventListener("mouseleave", ()=>{
        removeHighlight(x);
      })
      const space = {div, x, y, taken:false, piece: "empty", number: piecesPlaced};
      row.push(space);
    };
    gameBoardArr.push(row);
  };
  populateBoard(gameBoardArr);
}

// Swap colours after each click
function swapPlayers(){
  isPeach = !isPeach;
  displayTurn();
}

// Move colours down to the very bottom of the column once a column once the column has been pressed
// when column has been clicked check all y values until a has not been taken
function addMarker(posX){
  for(let posY = 5; posY > -1; posY--){
    if(!gameBoardArr[posY][posX].taken){
      if(isPeach){
        piecesPlaced++
        gameBoardArr[posY][posX].div.style.backgroundColor = "var(--third-color)";
        gameBoardArr[posY][posX].taken = true;
        gameBoardArr[posY][posX].piece = peachPiece;
        gameBoardArr[posY][posX].number = piecesPlaced;
        checkWin(gameBoardArr, gameBoardArr[posY][posX], piecesPlaced);
        //swap player once a game piece has been legally placed
        swapPlayers();
        break;
      }else{
        piecesPlaced++
        gameBoardArr[posY][posX].div.style.backgroundColor = "var(--fourth-color)";
        gameBoardArr[posY][posX].taken = true;
        gameBoardArr[posY][posX].piece = orangePiece;
        gameBoardArr[posY][posX].number = piecesPlaced;
        checkWin(gameBoardArr, gameBoardArr[posY][posX],piecesPlaced);
        //swap player once a game piece has been legally placed
        swapPlayers();
        break;
      };
    }
  };
};
// check to see if any player has won after a game piece has been played
function checkWin(arr, currentSpace){
  // check all tiles in each direction 
  let horizontal = [];
  let vertical = [];
  let backwardDiagonal = [];
  let forwardDiagonal = [];
  // check horizontal line
  for(let x = 0; x< 7; x++){
    horizontal.push(arr[currentSpace.y][x].piece);
  }
  if(inRow(horizontal,currentSpace.piece)){
    winningScreen.style.display = "flex"
    winningText.innerHTML = `${currentSpace.piece} wins`;
    return;
  }
  //check vertical line
  for(let y = 0; y< 6; y++){
    vertical.push(arr[y][currentSpace.x].piece);
  }
  if(inRow(vertical,currentSpace.piece)){
    winningScreen.style.display = "flex"
    winningText.innerHTML = `${currentSpace.piece} wins`;
    return;
  }
  //check forward diagonal
  for(let i = -5; i<6; i++){
    try{forwardDiagonal.push(arr[currentSpace.y-i][currentSpace.x+i].piece);} catch(err){};
  }
  if(inRow(forwardDiagonal,currentSpace.piece)){
    winningScreen.style.display = "flex"
    winningText.innerHTML = `${currentSpace.piece} wins`;
    return;
  }
  //check backward diagonal
  for(let i = -5; i<6; i++){
    try{backwardDiagonal.push(arr[currentSpace.y+i][currentSpace.x+i].piece);} catch(err){};
  }
  if(inRow(backwardDiagonal,currentSpace.piece)){
    winningScreen.style.display = "flex"
    winningText.innerHTML = `${currentSpace.piece} wins`;
    return;
  }

  //check for draw
  if(piecesPlaced == 42){
    winningScreen.style.display = "flex"
    winningText.innerHTML = `Draw!`;
    return;
  }
}

// check if 5 spaces in a row are the space piece
function inRow(line, currentPiece){
  if(line.length == 5){
    if(line.slice(0,5).every((space)=> space == currentPiece)){
      return true;
    };
  } else if(line.length == 6){
    if(line.slice(0,5).every((space)=> space == currentPiece)){
      return true;
    } else if(line.slice(1,6).every((space)=> space == currentPiece)){
      return true;
    };
  } else if(line.length == 7){
    if(line.slice(0,5).every((space)=> space == currentPiece)){
      return true;
    } else if(line.slice(1,6).every((space)=> space == currentPiece)){
      return true;
    } else if(line.slice(2,7).every((space)=> space == currentPiece)){
      return true;
    }
  } else{
    return false;
  };
};

// run function to visualise gameboard
function populateBoard(arr){
  displayTurn();
  arr.forEach(row =>{
    row.forEach(space=>{
      gameBoardCon.append(space.div);
    });
  });
  return arr;
};

// restart button, on press create new board and delete old board contents
function reset(){
  gameBoardCon.innerHTML = "";
  gameBoardArr = [];
  piecesPlaced = 0;
  winningScreen.style.display = "none";
  populateArr();
}

// display the current players turn
function displayTurn(){
  if(isPeach){
    playerTurn.innerHTML = peachPiece;
  }else{
    playerTurn.innerHTML = orangePiece;
  };
};

// highlight column on mouseover
function hightLightColumn(x){
  // if space is taken do not high light column
  for(let y = 0; y < 6; y++){
    if(gameBoardArr[y][x].taken){
      return;
    }else{
      gameBoardArr[y][x].div.classList.add("highLight");
    };
  };
};
// unhighlight column when mouse leaves column
function removeHighlight(x){
  for(let y = 0; y < 6; y++){
    gameBoardArr[y][x].div.classList.remove("highLight");
  };
};

populateArr();
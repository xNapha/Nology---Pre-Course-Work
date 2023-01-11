// Board creation
// a connect 4 board size never changes so no user input needed

const body = document.querySelector("body");
const gameBoardCon = document.createElement("div");
gameBoardCon.setAttribute("id", "gameBoardCon");
body.append(gameBoardCon);
let gameBoardArr = [];

const redPiece = "red";
const yellowPiece = "yellow";
let isRed = true;

//Populate Array with arrays of objects
function populateBoard(){
  for(let y = 0; y < 6; y++){
    const row = [];
    for(let x = 0; x< 7; x++){
      const div = document.createElement("div");
      div.classList.add("empty");
      div.addEventListener("click",()=>{
        addMarker(x);
      })
      const space = {
        div,
        x,
        y,
        taken:false,
        piece: "empty"
      };
      row.push(space);
    };
    gameBoardArr.push(row);
  };
  gameBoardArr.forEach(row =>{
    row.forEach(space=>{
      gameBoardCon.append(space.div);
    });
  });
  return gameBoardArr;
}

// Swap colours after each click
function swapPlayers(){
  isRed = !isRed;
}

// Move colours down to the very bottom of the column once a column once the column has been pressed
// when column has been clicked check all y values until a has not been taken
function addMarker(posX){
  for(let posY = 5; posY > -1; posY--){
    if(!gameBoardArr[posY][posX].taken){
      if(isRed){
        gameBoardArr[posY][posX].div.style.backgroundColor = redPiece;
        gameBoardArr[posY][posX].taken = true;
        gameBoardArr[posY][posX].piece = redPiece;
        checkWin(gameBoardArr, gameBoardArr[posY][posX]);
        //swap player once a game piece has been legally placed
        swapPlayers();
        break;
      }else{
        gameBoardArr[posY][posX].div.style.backgroundColor = yellowPiece;
        gameBoardArr[posY][posX].taken = true;
        gameBoardArr[posY][posX].piece = yellowPiece;
        checkWin(gameBoardArr, gameBoardArr[posY][posX]);
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
    console.log(`${currentSpace.piece} wins`);
  }
  //check vertical line
  for(let y = 0; y< 6; y++){
    vertical.push(arr[y][currentSpace.x].piece);
  }
  if(inRow(vertical,currentSpace.piece)){
    console.log(`${currentSpace.piece} wins`);
  }
  //check forward diagonal
  for(let y = 0; y< 6; y++){
    for(let x=0; x< 7; x++){

    }
  }
  if(inRow(forwardDiagonal,currentSpace.piece)){
    console.log(`${currentSpace.piece} wins`);
  }

  //check backward diagonal
  for(let y = 0; y< 6; y++){
  }
  if(inRow(backwardDiagonal,currentSpace.piece)){
    console.log(`${currentSpace.piece} wins`);
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
    } else{
      return false;
    };
  } else{
    return false;
  };
};
//run function to visualise gameboard
populateBoard();
try{gameBoardArr[7][7]}catch(err){console.log(false)}
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
        addMarker(x)
        swapPlayers();
      })
      const space = {div,x,y,taken:false,};
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
function addMarker(x){
  for(let posY = 5; posY > -1; posY--){
    if(!gameBoardArr[posY][x].taken){
      if(isRed){
        gameBoardArr[posY][x].div.style.backgroundColor = redPiece;
        gameBoardArr[posY][x].taken = true;
        break;
      }else{
        gameBoardArr[posY][x].div.style.backgroundColor = yellowPiece;
        gameBoardArr[posY][x].taken = true;
        break;
      };
    };
  };
}
//run function to visualise gameboard
populateBoard();